package com.vti.controller;

import com.vti.configuration.Jwt.JwtTokenUtils;
import com.vti.dto.LoginDTO;
import com.vti.dto.LoginRequest;
import com.vti.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class authController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private JwtTokenUtils jwtTokenUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    BCryptPasswordEncoder encoder;
    @Autowired
    HttpServletRequest httpServletRequest;
    @PostMapping("/login")
    public ResponseEntity<?> loginJwt( @RequestBody LoginRequest request ) throws Exception {
        authenticate(request.getUserName(), request.getPassword());
        LoginDTO loginD = accountService.findByUserName(request.getUserName());
        loginD.setToken(jwtTokenUtils.generateToken(accountService.loadUserByUsername(request.getUserName())));
        return ResponseEntity.ok(loginD);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
