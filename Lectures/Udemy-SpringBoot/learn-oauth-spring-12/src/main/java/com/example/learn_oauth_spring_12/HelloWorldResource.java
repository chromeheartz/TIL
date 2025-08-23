package com.example.learn_oauth_spring_12;


import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldResource {
	@GetMapping("/")
	public String helloworld(Authentication authentication) {
		System.out.println(authentication);
		return "hello world";
	}
}
