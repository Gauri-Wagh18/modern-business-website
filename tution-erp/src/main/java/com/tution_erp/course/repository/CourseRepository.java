package com.tution_erp.course.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.tution_erp.course.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
