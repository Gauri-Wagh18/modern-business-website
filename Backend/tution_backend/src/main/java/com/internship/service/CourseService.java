package com.internship.service;

import java.util.List;
import com.internship.dto.CourseRequestDto;
import com.internship.dto.CourseResponseDto;

public interface CourseService {

    CourseResponseDto createCourse(CourseRequestDto dto);

    List<CourseResponseDto> getAllCourses();

    CourseResponseDto getCourseById(Long id);

    CourseResponseDto updateCourse(Long id, CourseRequestDto dto);

    void deleteCourse(Long id);
}
