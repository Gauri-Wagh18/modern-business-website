package com.internship.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.internship.dto.UserRequestDto;
import com.internship.dto.UserResponseDto;
import com.internship.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/users")
public class UserController 
{
	private final UserService userService;

	public UserController(UserService userService) 
	{
		this.userService = userService;
	}

	// CREATE USER
	@PostMapping
	public ResponseEntity<UserResponseDto> createUser(@RequestBody UserRequestDto dto) 
	{
		System.out.println("Inside the user controller: " + dto);
		UserResponseDto response = userService.createUser(dto);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	// GET ALL USERS
	@GetMapping
	public ResponseEntity<List<UserResponseDto>> getAllUsers() 
	{
		return ResponseEntity.ok(userService.getAllUsers());
	}

	// GET USER BY ID ✅ FIXED
	@GetMapping("/{id}")
	public ResponseEntity<UserResponseDto> getUserById(@PathVariable("id") Long id) 
	{
		System.out.println("Id is : " + id);
		return ResponseEntity.ok(userService.getUserById(id));
	}

	// UPDATE USER ✅ FIXED
	@PutMapping("/{id}")
	public ResponseEntity<UserResponseDto> updateUser(@PathVariable("id") Long id,@Valid @RequestBody UserRequestDto dto) 
	{
		System.out.println("PUT ID: " + id);
		System.out.println("PUT BODY: " + dto);
		return ResponseEntity.ok(userService.updateUser(id, dto));
	}

	// DELETE USER ✅ FIXED
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) 
	{
		userService.deleteUser(id);
		return ResponseEntity.noContent().build();
		
		
	}
	@PostMapping("/users/{userId}/courses/{courseId}")
	public ResponseEntity<String> enrollCourse(
	        @PathVariable Long userId,
	        @PathVariable Long courseId) {

	    userService.enrollStudent(userId, courseId);
	    return ResponseEntity.ok("Student enrolled successfully");
	}

}
