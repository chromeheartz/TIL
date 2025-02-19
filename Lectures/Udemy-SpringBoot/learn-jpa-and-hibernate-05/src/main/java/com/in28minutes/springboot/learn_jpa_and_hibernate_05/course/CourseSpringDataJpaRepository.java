package com.in28minutes.springboot.learn_jpa_and_hibernate_05.course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseSpringDataJpaRepository extends JpaRepository<Course, Long> {

	List<Course> findByName(String name);
	List<Course> findByAuthor(String author);
	
}
