package com.vti.configuration.Jwt;



import com.vti.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//là một phần quan trọng của việc xác thực và kiểm tra tính hợp lệ của token JWT trong các yêu cầu đến ứng dụng của bạn
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    private static final String AUTHORIZATION = "Authorization";

    @Autowired
    private JwtTokenUtils jwtUtils;

    @Autowired
    private AccountService accountService;

//    private static final Logger logger = (Logger) LoggerFactory.getLogger(AuthenticationFilter.class);

    @Override
    protected void doFilterInternal ( HttpServletRequest request, HttpServletResponse response, FilterChain filterChain )
            throws ServletException, IOException {
        String username = null;
        String jwtToken = null;

        String token = request.getHeader(AUTHORIZATION);

        if (token !=null) {
            jwtToken = token.substring(7);
            username = jwtUtils.getUsernameFromToken(jwtToken);
            if (username != null
                    && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = accountService.loadUserByUsername(username);
                if (jwtUtils.validateToken(jwtToken, userDetails)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
        }
        filterChain.doFilter(request, response);// da qua dc phan authen
    }


}
