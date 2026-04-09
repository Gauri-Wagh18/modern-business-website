package com.tution_erp.student.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.tution_erp.student.dto.*;
import com.tution_erp.student.service.StudentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StudentResponse create(@Valid @RequestBody CreateStudentRequest request) {
        return service.createStudent(request);
    }

    @GetMapping
    public List<StudentResponse> getAll() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentResponse getById(@PathVariable Long id) {
        return service.getStudentById(id);
    }

    @PutMapping("/{id}")
    public StudentResponse update(@PathVariable Long id,
                                 @Valid @RequestBody CreateStudentRequest request) {
        return service.updateStudent(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.deleteStudent(id);
    }
}