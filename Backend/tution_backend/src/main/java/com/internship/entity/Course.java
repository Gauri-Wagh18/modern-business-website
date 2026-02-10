package com.internship.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private boolean active = true;

    /* ==================================================
       🔥 COURSE ↔ USER (STUDENT) RELATIONSHIP
       ================================================== */

    @ManyToMany(mappedBy = "courses")
    @JsonIgnore   // 🚨 prevents infinite JSON loop
    private Set<User> users = new HashSet<>();

    /* ==================================================
       Constructors
       ================================================== */

    public Course() {
    }

    public Course(String title, String description, Double price) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.active = true;
    }

    /* ==================================================
       Getters & Setters
       ================================================== */

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
 
    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }
 
    public void setPrice(Double price) {
        this.price = price;
    }

    public boolean isActive() {
        return active;
    }
 
    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
