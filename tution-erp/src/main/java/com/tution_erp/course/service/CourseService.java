package com.tution_erp.course.service;


import java.util.List;
import com.tution_erp.course.dto.*;

public interface CourseService {

    CourseResponse createCourse(CreateCourseRequest request);

    List<CourseResponse> getAllCourses();

    CourseResponse getCourseById(Long id);

    CourseResponse updateCourse(Long id, CreateCourseRequest request);

    void deleteCourse(Long id);
}
