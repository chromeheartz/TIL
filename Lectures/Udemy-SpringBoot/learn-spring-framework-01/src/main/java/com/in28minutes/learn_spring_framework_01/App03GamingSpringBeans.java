package com.in28minutes.learn_spring_framework_01;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.in28minutes.learn_spring_framework_01.game.GameRunner;
import com.in28minutes.learn_spring_framework_01.game.GamingConsole;




public class App03GamingSpringBeans {
	
	
	public static void main(String[] args) {
		try (var context = new AnnotationConfigApplicationContext(GamingConfiguration.class)) {
			context.getBean(GamingConsole.class).up();
			context.getBean(GameRunner.class).run();
		}
		
	}

}
