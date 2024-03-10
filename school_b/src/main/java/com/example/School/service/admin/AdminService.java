package com.example.School.service.admin;

import com.example.School.dto.*;
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

    List<StudentLeaveDTO> getAllAppliedLeaves();

    StudentLeaveDTO changeLeaveStatus(Long leaveId, String status);

    TeacherDTO postTeacher(TeacherDTO teacherDTO);

    List<TeacherDTO> getAllTeachers();

    String deleteTeacherById(Long teacherId);

    SingleTeacherDTO getTeacherById(Long teacherId);

    TeacherDTO updateTeacher(TeacherDTO teacherDTO, Long teacherId);

    List<StudentLeaveDTO> findAllLeavesByStudentLeaveStatus(String status);

    LeaveChartDTO getLeaveChart();
}
