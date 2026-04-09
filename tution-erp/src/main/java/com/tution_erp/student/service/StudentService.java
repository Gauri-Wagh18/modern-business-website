package com.tution_erp.student.service;


import java.util.List;
import com.tution_erp.student.dto.CreateStudentRequest;
import com.tution_erp.student.dto.StudentResponse;

public interface StudentService {

    StudentResponse createStudent(CreateStudentRequest request);

    List<StudentResponse> getAllStudents();

    StudentResponse getStudentById(Long id);

    StudentResponse updateStudent(Long id, CreateStudentRequest request);

    void deleteStudent(Long id);
}
