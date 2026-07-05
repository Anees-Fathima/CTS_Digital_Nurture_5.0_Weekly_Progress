package com.cognizant.jwt_authentication.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {

        auth.inMemoryAuthentication()
            .withUser("user")
            .password("{noop}pwd")
            .roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http)
            throws Exception {

        http.csrf().disable()
            .httpBasic()
            .and()
            .authorizeRequests()
            .antMatchers("/authenticate")
            .hasAnyRole("USER", "ADMIN")
            .anyRequest()
            .authenticated();
    }
}