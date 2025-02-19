package com.in28minutes.springboot.learn_jpa_and_hibernate_05.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.in28minutes.springboot.learn_jpa_and_hibernate_05.course.Course;
import com.in28minutes.springboot.learn_jpa_and_hibernate_05.course.CourseSpringDataJpaRepository;
import com.in28minutes.springboot.learn_jpa_and_hibernate_05.course.jpa.CourseJpaRepository;

@Component
public class CourseCommandLineRunner implements CommandLineRunner{
	
//	@Autowired
//	private CourseJdbcRepository repository;
	
//	@Autowired
//	private CourseJpaRepository repository;
	
	@Autowired
	private CourseSpringDataJpaRepository repository;

//	@Override
//	public void run(String... args) throws Exception {
//		repository.insert(new Course(1, "bibiboy", "developer"));
//		repository.insert(new Course(2, "bibiboy2", "developer"));
//		repository.insert(new Course(3, "bibiboy3", "developer"));
//		
//		repository.deleteById(1);
//		
//		System.out.println(repository.findById(2));
//		
//	}
	@Override
	public void run(String... args) throws Exception {
		repository.save(new Course(1, "bibiboy", "developer"));
		repository.save(new Course(2, "bibiboy2", "developer"));
		repository.save(new Course(3, "bibiboy3", "developer"));
		
		repository.deleteById(1l);
		
		System.out.println(repository.findById(2l));
		
		System.out.println(repository.findAll());
		
		System.out.println("===== findByAuthor ======");
		System.out.println(repository.findByAuthor("developer"));
		
		System.out.println("===== findByNBame =====");
		System.out.println(repository.findByName("bibiboy3"));
		
	}

}
