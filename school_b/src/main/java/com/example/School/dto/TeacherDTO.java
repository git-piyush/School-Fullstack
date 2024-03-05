package com.example.School.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherDTO {

    private Long id;

    private String email;

    private String name;

    private String gender;

    private String department;

    private String qualification;

    private Date dob;

    private String address;



}
