package com.example.School.dto;

import lombok.Data;

import java.util.Date;

@Data
public class FeeDTO {

    private Long id;

    private String month;

    private String givenBy;

    private Long amount;

    private String description;

    private Date createdDate;

    private Long studentId;

}
