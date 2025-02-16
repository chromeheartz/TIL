package com.in28minutes.learn_spring_framework.game;

import org.springframework.stereotype.Component;

@Component
public class PacManGame implements GamingConsole{
	public void up() {
		System.out.println("pac manup");
	}
	public void down() {
		System.out.println("pac down");
	}
	public void left() {
		System.out.println("pac left");
	}
	public void right() {
		System.out.println("pac right");

	}
}
