package com.tution_erp.teacher.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.tution_erp.teacher.dto.*;
import com.tution_erp.teacher.entity.Teacher;
import com.tution_erp.teacher.repository.TeacherRepository;
import com.tution_erp.teacher.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository repository;

    public TeacherServiceImpl(TeacherRepository repository) {
        this.repository = repository;
    }

    @Override
    public TeacherResponse createTeacher(CreateTeacherRequest request) {
        Teacher teacher = new Teacher();
        teacher.setName(request.getName());
        teacher.setEmail(request.getEmail());
        teacher.setSubject(request.getSubject());

        Teacher saved = repository.save(teacher);
        return mapToResponse(saved);
    }

    @Override
    public List<TeacherResponse> getAllTeachers() {
        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public TeacherResponse getTeacherById(Long id) {
        Teacher teacher = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found: " + id));

        return mapToResponse(teacher);
    }

    @Override
    public TeacherResponse updateTeacher(Long id, CreateTeacherRequest request) {
        Teacher teacher = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found: " + id));

        teacher.setName(request.getName());
        teacher.setEmail(request.getEmail());
        teacher.setSubject(request.getSubject());

        Teacher updated = repository.save(teacher);
        return mapToResponse(updated);
    }

    @Override
    public void deleteTeacher(Long id) {
        Teacher teacher = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found: " + id));

        repository.delete(teacher);
    }

    private TeacherResponse mapToResponse(Teacher teacher) {
        TeacherResponse res = new TeacherResponse();
        res.setId(teacher.getId());
        res.setName(teacher.getName());
        res.setEmail(teacher.getEmail());
        res.setSubject(teacher.getSubject());
        return res;
    }
}