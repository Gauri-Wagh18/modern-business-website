package com.internship.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internship.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Find user by email (for login / validation)
    Optional<User> findByEmail(String email);

    // Check if email already exists (for registration)
    boolean existsByEmail(String email);
    

}
