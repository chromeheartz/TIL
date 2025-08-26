package com.in28minutes.learn_springaop_13.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

//AOP Configuration
@Configuration
@Aspect
public class LoggingAspect {
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	// PointCut
	@Before("com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.allPackageConfigUsingBean()")
	public void logMethodCallBeforeExecution(JoinPoint joinPoint) {
		logger.info("Before Aspect - {} is called with arguments: {}", joinPoint, joinPoint.getArgs());
	}
	
	@After("com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.businesPackageConfig()")
	public void logMethodCallAfterExecution(JoinPoint joinPoint) {
		logger.info("After Aspect - {}", joinPoint);
	}
	
	@AfterThrowing(
			pointcut = "com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.businesAndDataPackageConfig()", 
			throwing = "exception"
	)
	public void logMethodCallAfterExeption(JoinPoint joinPoint, Exception exception) {
		logger.info("AfterThrowing Aspect - {}" , joinPoint, exception);
	}
	
	@AfterReturning(
			pointcut = "com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.dataPackageConfig()", 
			returning = "resultValue"
	)
	public void logMethodCallAfterSuccessfulExecution(JoinPoint joinPoint, Object resultValue) {
		logger.info("AfterThrowing Aspect - {}" , joinPoint, resultValue);
	}
}
