package com.tution_erp.enrollment.controller;


import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.tution_erp.course.dto.CourseResponse;
import com.tution_erp.course.dto.CreateCourseRequest;
import com.tution_erp.enrollment.dto.*;
import com.tution_erp.enrollment.service.EnrollmentService;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    private final EnrollmentService service;

    public EnrollmentController(EnrollmentService service) {
        this.service = service;
    }

    @PostMapping
    public EnrollmentResponse enroll(@RequestBody CreateEnrollmentRequest request) {
        return service.enroll(request);
    }

    @GetMapping
    public List<EnrollmentResponse> getAll() {
        return service.getAllEnrollments();
    }
    @GetMapping("/{id}")
    public CourseResponse getById(@PathVariable("id") Long id) {
        return service.getCourseById(id);
    }
    @PutMapping("/{id}")
    public CourseResponse update(
            @PathVariable("id") Long id,
            @RequestBody CreateCourseRequest request) {

        return service.updateCourse(id, request);
    }
}
