package com.tution_erp.teacher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tution_erp.teacher.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}