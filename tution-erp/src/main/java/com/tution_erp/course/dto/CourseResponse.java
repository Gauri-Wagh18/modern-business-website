package com.tution_erp.course.dto;


public class CourseResponse {

    private Long id;
    private String name;
    private String description;
    private Double price;

    // ✅ Default Constructor (REQUIRED)
    public CourseResponse() {
    }

    // ✅ Parameterized Constructor (Optional)
    public CourseResponse(Long id, String name, String description, Double price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    // ✅ Getter for id
    public Long getId() {
        return id;
    }

    // ✅ Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // ✅ Getter for name
    public String getName() {
        return name;
    }

    // ✅ Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // ✅ Getter for description
    public String getDescription() {
        return description;
    }

    // ✅ Setter for description
    public void setDescription(String description) {
        this.description = description;
    }

    // ✅ Getter for price
    public Double getPrice() {
        return price;
    }

    // ✅ Setter for price
    public void setPrice(Double price) {
        this.price = price;
    }
}
