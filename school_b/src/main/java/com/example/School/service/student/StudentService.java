package com.example.School.service.student;

import com.example.School.dto.SingleStudentDTO;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    SingleStudentDTO getStudentById(Long studentId);
}
