package com.in28minutes.rest.webservices_06.restful_web_services.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
	
	// UserDaoService > Static List
	
	private static List<User> users = new ArrayList<>();
	
	private static int usersCount = 0;
			
	static {
		users.add(new User(++usersCount, "Bibi", LocalDate.now().minusYears(30)));
		users.add(new User(++usersCount, "Aiai", LocalDate.now().minusYears(25)));
		users.add(new User(++usersCount, "Cici", LocalDate.now().minusYears(20)));
	}
	
	// public List<User> findAll() {}
	public List<User> findAll() {
		return users;
	}
	
	// public User findOne(int id) {}
	public User findOne(int id) {
		Predicate<? super User> predicate = user -> user.getId().equals(id); 
		return users.stream().filter(predicate).findFirst().orElse(null);
	}
	
	// delete
	public void deleteById(int id) {
		Predicate<? super User> predicate = user -> user.getId().equals(id);
		users.removeIf(predicate);
	}
	
	// public User save(User user) {}
	public User save(User user) {
		user.setId(++usersCount);
		users.add(user);
		return user;
	}
}
