package com.in28minutes.learn_spring_framework.examples.c1;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Primary
public class MongoDbDataService implements DataService{

	@Override
	public int[] retrieveData() {
		// TODO Auto-generated method stub
        return new int[] { 11, 22, 33, 44, 55 };
        }

}
