package com.cognizant.jwt_authentication.controller;

import java.util.HashMap;
import java.util.Map;

import java.util.Base64;

import java.util.Date;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
	
	private String getUser(String authHeader) {

	    System.out.println("Inside getUser()");

	    String encodedCredentials =
	            authHeader.substring("Basic ".length());

	    System.out.println("Encoded : " + encodedCredentials);

	    byte[] decodedBytes =
	            Base64.getDecoder().decode(encodedCredentials);

	    String credentials =
	            new String(decodedBytes);

	    System.out.println("Decoded : " + credentials);

	    String user =
	            credentials.substring(0, credentials.indexOf(":"));

	    System.out.println("User : " + user);

	    return user;
	}
	
	private String generateJwt(String user) {

	    JwtBuilder builder = Jwts.builder();

	    builder.setSubject(user);

	    builder.setIssuedAt(new Date());

	    builder.setExpiration(
	            new Date((new Date()).getTime() + 1200000));

	    builder.signWith(
	            SignatureAlgorithm.HS256,
	            "secretkey");

	    String token = builder.compact();

	    return token;
	}

	@GetMapping("/authenticate")
	public Map<String, String> authenticate(
	        @RequestHeader("Authorization") String authHeader) {

	    System.out.println("START");

	    System.out.println(authHeader);

	    String user = getUser(authHeader);

	    System.out.println("Retrieved User = " + user);

	    Map<String, String> map = new HashMap<>();

	    String token = generateJwt(user);

	    System.out.println("Generated Token : " + token);

	    map.put("token", token);

	    System.out.println("END");

	    return map;
	}
}