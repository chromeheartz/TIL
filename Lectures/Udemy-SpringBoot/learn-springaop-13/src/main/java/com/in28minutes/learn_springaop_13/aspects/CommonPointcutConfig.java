package com.in28minutes.learn_springaop_13.aspects;

import org.aspectj.lang.annotation.Pointcut;

public class CommonPointcutConfig {
	
	@Pointcut("execution(* com.in28minutes.learn_springaop_13.*.*.*(..))")
	public void businesAndDataPackageConfig() {}
	
	@Pointcut("execution(* com.in28minutes.learn_springaop_13.business.*.*(..))")
	public void businesPackageConfig() {}
	
	@Pointcut("execution(* com.in28minutes.learn_springaop_13.data.*.*(..))")
	public void dataPackageConfig() {}
	
	@Pointcut("bean(*Service*")
	public void allPackageConfigUsingBean() {}
	
	@Pointcut("@annotation(/learn-springaop-13/src/main/java/com/in28minutes/learn_springaop_13/annotation/TrackTime.java")
	public void trackTimeAnnotation() {}
}
