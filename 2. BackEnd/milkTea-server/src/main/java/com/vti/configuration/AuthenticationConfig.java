//<<<<<<< HEAD
////package com.vti.configuration;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////
////@Configuration
////public class AuthenticationConfig {
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////}
//=======
//package com.vti.configuration;
//
//import org.modelmapper.ModelMapper;
//import org.modelmapper.convention.MatchingStrategies;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
///**
// * @EnableGlobalMethodSecurity is for
// * <global-method-security pre-post-annotations="enabled" />
// */
//@EnableWebMvcSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//@Configuration
//public class AuthenticationConfig  extends WebSecurityConfigurerAdapter {
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        /**
//         * <http-basic entry-point-ref="unauthorisedEntryPoint"/>
//         * <intercept-url pattern="/**" access="permitAll" />
//         */
//        http.httpBasic()
//                .and()
//                .authorizeRequests()
//                .antMatchers("/**")
//                .permitAll();
//
//        /**
//         * <logout invalidate-session="true" delete-cookies="JSESSIONID" />
//         */
//        http.logout()
//                .logoutUrl("/j_spring_security_logout")
//                .logoutSuccessUrl("/")
//                .invalidateHttpSession( true )
//                .deleteCookies("JSESSIONID");
//
//        /**
//         * <session-management session-fixation-protection="newSession"/>
//         */
//        http.sessionManagement()
//                .sessionFixation()
//                .newSession();
//
//        http.csrf().disable();
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//                .withUser("user").password("password").roles("USER")
//                .and()
//                .withUser("admin").password("admin").roles("ADMIN");
//    }
//
//}
//>>>>>>> linh-feature
