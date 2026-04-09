package com.tution_erp.enrollment.service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.tution_erp.course.dto.CourseResponse;
import com.tution_erp.course.dto.CreateCourseRequest;
import com.tution_erp.course.entity.Course;
import com.tution_erp.course.repository.CourseRepository;
import com.tution_erp.enrollment.dto.*;
import com.tution_erp.enrollment.entity.Enrollment;
import com.tution_erp.enrollment.repository.EnrollmentRepository;
import com.tution_erp.enrollment.service.EnrollmentService;
import com.tution_erp.student.entity.Student;
import com.tution_erp.student.repository.StudentRepository;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    private final EnrollmentRepository enrollmentRepo;
    private final StudentRepository studentRepo;
    private final CourseRepository courseRepo;

    public EnrollmentServiceImpl(EnrollmentRepository enrollmentRepo,
                                 StudentRepository studentRepo,
                                 CourseRepository courseRepo) {
        this.enrollmentRepo = enrollmentRepo;
        this.studentRepo = studentRepo;
        this.courseRepo = courseRepo;
    }

    @Override
    public EnrollmentResponse enroll(CreateEnrollmentRequest request) {

        Student student = studentRepo.findById(request.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Course course = courseRepo.findById(request.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student);
        enrollment.setCourse(course);

        return mapToResponse(enrollmentRepo.save(enrollment));
    }

    @Override
    public List<EnrollmentResponse> getAllEnrollments() {
        return enrollmentRepo.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private EnrollmentResponse mapToResponse(Enrollment e) {
        EnrollmentResponse res = new EnrollmentResponse();

        res.setId(e.getId());
        res.setStudentName(e.getStudent().getFirstName());
        res.setCourseName(e.getCourse().getName());

        return res;
    }

	@Override
	public CourseResponse getCourseById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CourseResponse updateCourse(Long id, CreateCourseRequest request) {
		// TODO Auto-generated method stub
		return null;
	}
}
