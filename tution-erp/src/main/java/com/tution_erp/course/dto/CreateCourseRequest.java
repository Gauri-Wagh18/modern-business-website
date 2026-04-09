package com.tution_erp.course.dto;


public class CreateCourseRequest {

    private String name;
    private String description;
    private Double price;
    

    // ✅ Default Constructor (REQUIRED)
    public CreateCourseRequest() {
    }

    // ✅ Parameterized Constructor (Optional but good)
    public CreateCourseRequest(String name, String description, Double price) {
        this.name = name;
        this.description = description;
        this.price = price;
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