package com.in28minutes.learn_springaop_13.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class PerformanceTrackingAspect {
	private Logger logger = LoggerFactory.getLogger(getClass());

//	@Around("com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.businesAndDataPackageConfig()")
	@Around("com.in28minutes.learn_springaop_13.aspects.CommonPointcutConfig.trackTimeAnnotation()")
	public Object findExecutionTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		long startTimeMillis = System.currentTimeMillis();
		
		Object returnValue = proceedingJoinPoint.proceed();
		
		long endTimeMillis = System.currentTimeMillis();
		
		long executionDuration = endTimeMillis - startTimeMillis;
		
		logger.info("Around Aspect - {} Method executed in {} ms", proceedingJoinPoint ,executionDuration);
		return returnValue;
	}
}
