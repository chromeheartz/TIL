package com.in28minutes.learn_springaop_13;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.in28minutes.learn_springaop_13.business.BusinessService1;
import com.in28minutes.learn_springaop_13.business.BusinessService2;


@SpringBootApplication
public class LearnSpringaop13Application implements CommandLineRunner {
	
	private Logger logger = LoggerFactory.getLogger(getClass());


	private BusinessService1 businessService1;
	private BusinessService2 businessService2;
	
	public LearnSpringaop13Application(BusinessService1 businessService1, BusinessService2 businessService2) {
		this.businessService1 = businessService1;
		this.businessService2 = businessService2;
	}
	
	

	public static void main(String[] args) {
		SpringApplication.run(LearnSpringaop13Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info("Value returned is max {}", businessService1.calculateMax());
		logger.info("Value returned is min {}", businessService2.calculateMin());
		
		
	}

}
