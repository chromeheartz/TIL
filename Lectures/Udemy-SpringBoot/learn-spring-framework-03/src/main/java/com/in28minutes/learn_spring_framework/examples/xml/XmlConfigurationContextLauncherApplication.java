package com.in28minutes.learn_spring_framework.examples.xml;

import java.util.Arrays;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.in28minutes.learn_spring_framework_01.game.GameRunner;

public class XmlConfigurationContextLauncherApplication {

	
	public static void main(String[] args) {
		try (var context = new ClassPathXmlApplicationContext("contextConfiguration.xml")) {
			Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
			System.out.println(context.getBean("name"));
			context.getBean(GameRunner.class).run();
		}
		
	}

}
