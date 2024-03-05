package com.example.School.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.parameters.P;

import java.util.Date;

@Entity
@Data
@Table(name="teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String name;

    private String gender;

    private String department;

    private String qualification;

    private Date dob;

    private String address;
}
