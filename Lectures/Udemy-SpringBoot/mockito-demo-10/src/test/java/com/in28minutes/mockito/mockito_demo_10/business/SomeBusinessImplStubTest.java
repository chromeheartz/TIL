package com.in28minutes.mockito.mockito_demo_10.business;

import com.in28minutes.mockito.mockito_demo_10.business.SomeBusinessImpl;


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SomeBusinessImplStubTest {

	@Test
	void test() {
		DataService dataServiceStub = new DataServiceStub1();
		SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceStub);
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(25, result);
	}

}

class DataServiceStub1 implements DataService {

	@Override
	public int[] retrieveAllData() {
		return new int[] {25, 15, 5};
	}
	
}