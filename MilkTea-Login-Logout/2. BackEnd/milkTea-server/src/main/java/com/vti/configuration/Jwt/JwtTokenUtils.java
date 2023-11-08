package com.vti.configuration.Jwt;


import com.vti.dto.LoginDTO;
import com.vti.entity.Account;
import com.vti.entity.Token;
import com.vti.repository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Slf4j
@Component
public class JwtTokenUtils {
    private  static final long EXPIRATION = 864000000;
    private  static final String SECRET =  "123456";
//    PREFIX_TOKEN (tiền tố thường được sử dụng trong header của mã thông báo để chỉ ra loại mã thông báo),
    private static final String PREFIX_TOKEN = "Bearer";
    private static final String Authorization = "Authorization";

    @Autowired
    private TokenRepository tokenRepository;

//     tao moi token
    public String CreateAccessToken( LoginDTO loginD ){
        Date expirationDate = new Date(System.currentTimeMillis()+EXPIRATION);
        String token = Jwts.builder()
                .setId(String.valueOf(loginD.getId()))
                .setSubject(loginD.getUserAgent())
                .setIssuedAt(new Date())
                .setIssuer("VTI")
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .claim("authorities",loginD.getRole().name())
                .claim("user-Agent",loginD.getUserAgent()).compact();
        Token tokenEntity = new Token();
        tokenEntity.setToken(token);
        tokenEntity.setUserAgent(loginD.getUserAgent());
        tokenRepository.save(tokenEntity);
        return token;
    }

        // giai ma token
    public LoginDTO parseAccessToken(String token){
        LoginDTO loginDTO = new LoginDTO();
        if (!token.isEmpty()){
            try {
                token = token.replace(PREFIX_TOKEN,"").trim();
                Claims claims = Jwts.parser()
                        .setSigningKey(SECRET)
                        .parseClaimsJws(token).getBody();
                // lay ra thong tin
                String user = claims.getSubject();
                Account.Role role = Account.Role.valueOf(claims.get("authorities").toString());
                String userAgent = claims.get("user-Agent").toString();

                loginDTO.setUserName(user);
                loginDTO.setRole(role);
                loginDTO.setUserAgent(userAgent);
            }catch (Exception e){
                log.error(e.getMessage());
            }
        }return loginDTO;
    }


    //retrieve username from jwt token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    //retrieve expiration date from jwt token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }
    //for retrieveing any information from token we will need the secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
    }

    //check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //generate token for user
    public String generateToken( UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }
    //while creating the token -
    //1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
    //2. Sign the JWT using the HS512 algorithm and secret key.
    //3. According to JWS Compact Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
    //   compaction of the JWT to a URL-safe string
    private String doGenerateToken(Map<String, Object> claims, String subject) {

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))// 10 ngay
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();
    }

    //validate token
    public Boolean validateToken(String token, UserDetails userDetails) {
        // lay username tu token
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
