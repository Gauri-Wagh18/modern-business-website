package com.tution_erp.student.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.tution_erp.student.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}