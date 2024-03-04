package com.example.School.dto;

import com.example.School.enums.StudentLeaveStatus;
import lombok.*;

import java.util.Date;

@Setter
@Getter
public class StudentLeaveDTO {

    private Long id;

    private String subject;

    private String body;

    private Date date;

    private StudentLeaveStatus studentLeaveStatus;

    private Long userId;

    public StudentLeaveDTO() {
    }

    public StudentLeaveDTO(Long id, String subject, String body, Date date, StudentLeaveStatus studentLeaveStatus, Long userId) {
        this.id = id;
        this.subject = subject;
        this.body = body;
        this.date = date;
        this.studentLeaveStatus = studentLeaveStatus;
        this.userId = userId;
    }
}
