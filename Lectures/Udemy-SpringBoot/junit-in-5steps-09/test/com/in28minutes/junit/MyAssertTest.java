package com.in28minutes.junit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

class MyAssertTest {

	List<String> todos = Arrays.asList("AWS", "BIBI", "DEV");
	
	@Test
	void test() {
		boolean test = todos.contains("AWS");
		
//		assertEquals(true, test);
		assertTrue("error", test);
		
		assertEquals(3, todos.size());
	}

}
