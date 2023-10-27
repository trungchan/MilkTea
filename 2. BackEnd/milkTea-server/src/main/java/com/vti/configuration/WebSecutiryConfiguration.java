//package com.vti.configuration;
//
//
////import com.vti.configuration.Jwt.JwtRequestFilter;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.core.annotation.Order;
////import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.stereotype.Component;
//
//@Component
////@EnableWebSecurity
////@Order(2)
//
//public class WebSecutiryConfiguration
////        extends WebSecurityConfigurerAdapter
//{
//
//
////    @Autowired
////    private IUserService service;
////
////    @Autowired
////    private JwtRequestFilter jwtRequestFilter;
//
//
////    @Override
////    protected void configure( AuthenticationManagerBuilder auth) throws Exception {
////        auth.userDetailsService(service).passwordEncoder(new BCryptPasswordEncoder());
////    }
//
//    @Override
//    protected void configure( HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/api/v1/auth/login", "/api/v1/Registers","/api/v1/**")
//                .permitAll()
//                .anyRequest().authenticated()
//                .and().httpBasic()
//                .and().cors().and().csrf().disable();
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//
//    }
//
//
//}
//
