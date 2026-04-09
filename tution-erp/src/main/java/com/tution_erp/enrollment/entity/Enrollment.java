package com.tution_erp.enrollment.entity;


import com.tution_erp.student.entity.Student;
import com.tution_erp.course.entity.Course;

import jakarta.persistence.*;

@Entity
@Table(name = "enrollments")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 🔗 Student relation
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // 🔗 Course relation
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // 🔹 Constructors
    public Enrollment() {}

    public Enrollment(Long id, Student student, Course course) {
        this.id = id;
        this.student = student;
        this.course = course;
    }

    // 🔹 Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
