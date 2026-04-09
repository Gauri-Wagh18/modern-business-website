package com.tution_erp.course.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.tution_erp.course.dto.*;
import com.tution_erp.course.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CourseResponse create(@RequestBody CreateCourseRequest request) {
        return service.createCourse(request);
    }

    @GetMapping
    public List<CourseResponse> getAll() {
        return service.getAllCourses();
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

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.deleteCourse(id);
    }
}
