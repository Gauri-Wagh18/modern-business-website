package com.internship.service;

import java.util.List;

import com.internship.dto.UserRequestDto;
import com.internship.dto.UserResponseDto;

import jakarta.validation.Valid;

public interface UserService 
{

    UserResponseDto createUser(@Valid UserRequestDto dto);

    UserResponseDto getUserById(Long id);

    List<UserResponseDto> getAllUsers();

    UserResponseDto updateUser(Long id, @Valid UserRequestDto dto);

    void deleteUser(Long id);
    void enrollStudent(Long userId, Long courseId);
}
