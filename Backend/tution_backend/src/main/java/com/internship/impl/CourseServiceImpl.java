package com.internship.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.internship.dto.CourseRequestDto;
import com.internship.dto.CourseResponseDto;
import com.internship.entity.Course;
import com.internship.repository.CourseRepository;
import com.internship.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public CourseResponseDto createCourse(CourseRequestDto dto) {

        Course course = new Course();
        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setPrice(dto.getPrice());
        course.setActive(dto.isActive());   // ✅ important

        Course savedCourse = courseRepository.save(course);
        return mapToDto(savedCourse);
    }

    @Override
    public List<CourseResponseDto> getAllCourses() {
        return courseRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseResponseDto getCourseById(Long id) {

        Course course = courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found with id: " + id)
                );

        return mapToDto(course);
    }

    @Override
    public CourseResponseDto updateCourse(Long id, CourseRequestDto dto) {

        Course course = courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found with id: " + id)
                );

        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setPrice(dto.getPrice());
        course.setActive(dto.isActive());   // ✅ important

        Course updatedCourse = courseRepository.save(course);
        return mapToDto(updatedCourse);
    }

    @Override
    public void deleteCourse(Long id) {

        Course course = courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found with id: " + id)
                );

        courseRepository.delete(course);
    }

    private CourseResponseDto mapToDto(Course course) {
        return new CourseResponseDto(
                course.getId(),
                course.getTitle(),
                course.getDescription(),
                course.getPrice(),
                course.isActive()
        );
    }
}
