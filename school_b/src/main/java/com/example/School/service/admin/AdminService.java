package com.example.School.service.admin;

import com.example.School.dto.FeeDTO;
import com.example.School.dto.SingleStudentDTO;
import com.example.School.dto.StudentDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {
    StudentDTO postStudent(StudentDTO studentDTO);

    List<StudentDTO> getAllStudent();

    String deleteStudentById(Long studentId);

    SingleStudentDTO getStudentById(Long studentId);

    StudentDTO updateStudent(StudentDTO studentDTO, Long studentId);

    FeeDTO payFee(FeeDTO feeDTO, Long studentId);
}
