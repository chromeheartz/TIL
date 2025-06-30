package com.in28minutes.mockito.mockito_demo_10.business;

public class SomeBusinessImpl {
	
	private DataService dataService;
	
	
	
	public int findTheGreatestFromAllData() {
		int[] data = dataService.retrieveAllData();
		int greatestValue = Integer.MIN_VALUE;
		for(int value:data) {
			if (value > greatestValue) 
				greatestValue = value;
		}
		return greatestValue;
	}



	public SomeBusinessImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}
}

interface DataService {
	int[] retrieveAllData();
}