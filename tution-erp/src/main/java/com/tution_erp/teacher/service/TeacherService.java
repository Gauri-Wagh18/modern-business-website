package com.tution_erp.teacher.service;

import java.util.List;
import com.tution_erp.teacher.dto.*;

public interface TeacherService {

    TeacherResponse createTeacher(CreateTeacherRequest request);

    List<TeacherResponse> getAllTeachers();

    TeacherResponse getTeacherById(Long id);

    TeacherResponse updateTeacher(Long id, CreateTeacherRequest request);

    void deleteTeacher(Long id);
}
