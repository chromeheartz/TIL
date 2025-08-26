package com.in28minutes.learn_springaop_13.business;

import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.in28minutes.learn_springaop_13.data.DateService1;
import com.in28minutes.learn_springaop_13.data.DateService2;

@Service
public class BusinessService2 {

	
	private DateService2 dataService2;
	
	public BusinessService2(DateService2 dataService2) {
		this.dataService2 = dataService2;
	}
	public int calculateMin() {
		int[] data = dataService2.retrieveData();
//		throw new RuntimeException("Something Went Wrong!");
		
		try {
			Thread.sleep(30);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return Arrays.stream(data).min().orElse(0);
	}
}
