package com.example.School.repository;

import com.example.School.dto.StudentLeaveDTO;
import com.example.School.entity.StudentLeave;
import com.example.School.enums.StudentLeaveStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentLeaveRepository extends JpaRepository<StudentLeave, Long> {
    List<StudentLeave> findAllByUserId(Long studentId);

    List<StudentLeave> findAllLeavesByStudentLeaveStatus(StudentLeaveStatus status);
}
