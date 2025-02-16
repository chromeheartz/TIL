package com.in28minutes.learn_spring_framework.examples.PostConstrucPreDestroy;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import jakarta.inject.Inject;
import jakarta.inject.Named;


@Named
class BusinessService {
	private DataService dataService;

	@Inject
	public void setDataService(DataService dataService) {
		System.out.println("Setter Injection");
		this.dataService = dataService;
	}
	
	public DataService getDataService() {
		
		return dataService;
	}


	
	
}

@Component
class DataService {
	
}

@Configuration
@ComponentScan
public class CDIContextLauncherApplication {

	
	public static void main(String[] args) {
		try (var context = new AnnotationConfigApplicationContext(CDIContextLauncherApplication.class)) {
			Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
			
			System.out.println(context.getBean(BusinessService.class).getDataService());
		}
		
	}

}
