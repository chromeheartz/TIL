package com.in28minutes.mockito.mockito_demo_10.list;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class ListTest {

	@Test
	void multipleReturns() {
		List listMock = mock(List.class);
		// listMock.size() => 3
		when(listMock.size()).thenReturn(1).thenReturn(2);
		assertEquals(1, listMock.size());
		assertEquals(4, listMock.size());
	}
	
	@Test
	void parameters() {
		List listMock = mock(List.class);
		// listMock.size() => 3
		when(listMock.get(0)).thenReturn("SomeString");
		assertEquals("SomeString", listMock.get(0));
	}
	
	@Test
	void genericParameters() {
		List listMock = mock(List.class);
		when(listMock.get(Mockito.anyInt())).thenReturn("SomeOtherString");
		assertEquals("SomeOtherString", listMock.get(0));
		assertEquals("SomeOtherString", listMock.get(1));
	}
	
}
