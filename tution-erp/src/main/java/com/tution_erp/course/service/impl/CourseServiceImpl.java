package com.tution_erp.course.service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.tution_erp.course.dto.*;
import com.tution_erp.course.entity.Course;
import com.tution_erp.course.repository.CourseRepository;
import com.tution_erp.course.service.CourseService;
import com.tution_erp.teacher.entity.Teacher;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;
	private CrudRepository<Course, Long> teacherRepo;
	private Object request;

    public CourseServiceImpl(CourseRepository repository) {
        this.repository = repository;
    }

    @Override
    public CourseResponse createCourse(CreateCourseRequest request) {
    	

    	
        Course course = new Course();
        course.setName(request.getName());
        course.setDescription(request.getDescription());
        course.setPrice(request.getPrice());
        

        Course saved = repository.save(course);

        return mapToResponse(saved);
    }

    @Override
    public List<CourseResponse> getAllCourses() {
        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public CourseResponse getCourseById(Long id) {

        Course course = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Course not found with id: " + id));

        return mapToResponse(course);
    }

    @Override
    public CourseResponse updateCourse(Long id, CreateCourseRequest request) {

        Course course = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Course not found with id: " + id));

        course.setName(request.getName());
        course.setDescription(request.getDescription());
        course.setPrice(request.getPrice());

        return mapToResponse(repository.save(course));
    }

    @Override
    public void deleteCourse(Long id) {
        repository.deleteById(id);
    }

    private CourseResponse mapToResponse(Course course) {

        CourseResponse response = new CourseResponse();

        response.setId(course.getId());
        response.setName(course.getName());
        response.setDescription(course.getDescription());
        response.setPrice(course.getPrice());

        return response;
    }
    
}
