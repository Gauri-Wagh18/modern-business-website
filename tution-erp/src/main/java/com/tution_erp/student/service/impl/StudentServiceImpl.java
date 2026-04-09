package com.tution_erp.student.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.tution_erp.student.dto.CreateStudentRequest;
import com.tution_erp.student.dto.StudentResponse;
import com.tution_erp.student.entity.Student;
import com.tution_erp.student.repository.StudentRepository;
import com.tution_erp.student.service.StudentService;

import com.tution_erp.teacher.entity.Teacher;
import com.tution_erp.teacher.repository.TeacherRepository;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;
    private final TeacherRepository teacherRepository;

    // ✅ Constructor Injection
    public StudentServiceImpl(StudentRepository repository,
                              TeacherRepository teacherRepository) {
        this.repository = repository;
        this.teacherRepository = teacherRepository;
    }

    // ✅ CREATE STUDENT (WITH TEACHER LINK)
    @Override
    public StudentResponse createStudent(CreateStudentRequest request) {

        Student student = new Student();
        student.setFirstName(request.getFirstName());
        student.setLastName(request.getLastName()); 
        student.setEmail(request.getEmail());
        student.setPhone(request.getPhone());         
        student.setAddress(request.getAddress()); 

        // ✅ FETCH TEACHER USING ID
        Teacher teacher = teacherRepository.findById(request.getTeacherId())
                .orElseThrow(() -> new RuntimeException("Teacher not found with id: " + request.getTeacherId()));

        student.setTeacher(teacher);

        Student saved = repository.save(student);

        return mapToResponse(saved);
    }

    // ✅ GET ALL STUDENTS
    @Override
    public List<StudentResponse> getAllStudents() {
        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // ✅ GET STUDENT BY ID
    @Override
    public StudentResponse getStudentById(Long id) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        return mapToResponse(student);
    }

    // ✅ UPDATE STUDENT
    @Override
    public StudentResponse updateStudent(Long id, CreateStudentRequest request) {

        Student student = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        student.setFirstName(request.getFirstName());
        student.setEmail(request.getEmail());

        // ✅ UPDATE TEACHER ALSO
        Teacher teacher = teacherRepository.findById(request.getTeacherId())
                .orElseThrow(() -> new RuntimeException("Teacher not found with id: " + request.getTeacherId()));

        student.setTeacher(teacher);

        Student updated = repository.save(student);

        return mapToResponse(updated);
    }

    // ✅ DELETE STUDENT
    @Override
    public void deleteStudent(Long id) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        repository.delete(student);
    }

    // ✅ MAPPING METHOD
    private StudentResponse mapToResponse(Student student) {

        StudentResponse response = new StudentResponse();

        response.setId(student.getId());
        response.setFirstName(student.getFirstName());
        response.setLastName(student.getLastName());   
        response.setEmail(student.getEmail());
        response.setPhone(student.getPhone());        
        response.setAddress(student.getAddress());
        
        response.setLastName(student.getLastName());

        // ✅ INCLUDE TEACHER INFO (IMPORTANT)
        if (student.getTeacher() != null) {
            response.setTeacherId(student.getTeacher().getId());
            response.setTeacherName(student.getTeacher().getName());
        }
        return response;
    }
}