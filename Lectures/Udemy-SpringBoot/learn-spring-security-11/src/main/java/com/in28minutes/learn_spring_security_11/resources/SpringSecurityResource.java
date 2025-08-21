package com.in28minutes.learn_spring_security_11.resources;

import java.util.List;

import org.springframework.security.web.csrf.CsrfToken; 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class SpringSecurityResource {
	
	@GetMapping("/csrf-token")
	public CsrfToken retrieveCsrfToken(HttpServletRequest request) {
	    return (CsrfToken) request.getAttribute("_csrf");
	}
	
	
}
