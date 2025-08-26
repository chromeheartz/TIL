package com.in28minutes.learn_springaop_13.data;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public class DateService1 {
	public int[] retrieveData() {
		try {
			Thread.sleep(30);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		return new int[] {11, 20, 30, 44};
	}
}
