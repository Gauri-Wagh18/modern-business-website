package com.internship.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.internship.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
