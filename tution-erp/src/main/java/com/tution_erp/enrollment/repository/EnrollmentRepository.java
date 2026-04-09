package com.tution_erp.enrollment.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.tution_erp.enrollment.entity.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}