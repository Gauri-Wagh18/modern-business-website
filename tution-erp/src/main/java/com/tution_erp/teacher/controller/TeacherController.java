package com.tution_erp.teacher.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.tution_erp.teacher.dto.*;
import com.tution_erp.teacher.service.TeacherService;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    private final TeacherService service;

    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TeacherResponse create(@RequestBody CreateTeacherRequest request) {
        return service.createTeacher(request);
    }

    @GetMapping
    public List<TeacherResponse> getAll() {
        return service.getAllTeachers();
    }

    @GetMapping("/{id}")
    public TeacherResponse getById(@PathVariable("id") Long id) {
        return service.getTeacherById(id);
    }

    @PutMapping("/{id}")
    public TeacherResponse update(@PathVariable("id") Long id,
                                 @RequestBody CreateTeacherRequest request) {
        return service.updateTeacher(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        service.deleteTeacher(id);
    }
}