package com.tution_erp.enrollment.service;


import java.util.List;

import com.tution_erp.course.dto.CourseResponse;
import com.tution_erp.course.dto.CreateCourseRequest;
import com.tution_erp.enrollment.dto.*;

public interface EnrollmentService {

    EnrollmentResponse enroll(CreateEnrollmentRequest request);

    List<EnrollmentResponse> getAllEnrollments();

	CourseResponse getCourseById(Long id);

	CourseResponse updateCourse(Long id, CreateCourseRequest request);
}
