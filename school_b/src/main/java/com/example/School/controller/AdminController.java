package com.example.School.controller;

import com.example.School.dto.*;
import com.example.School.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

   // @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/student")
    public ResponseEntity<?> addStudent(@RequestBody StudentDTO studentDTO){
        System.out.println("4");
        StudentDTO createdStudentDTO = adminService.postStudent(studentDTO);
        if(createdStudentDTO==null){
            return ResponseEntity.status(HttpStatus.FOUND).body("Student Already Present");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudentDTO);
    }


    @GetMapping("/students")
    public ResponseEntity<List<StudentDTO>> getAllStudents(){
        List<StudentDTO> allStudent =  adminService.getAllStudent();
        System.out.println(allStudent.size());
        if(allStudent!=null && !allStudent.isEmpty()){
            return new ResponseEntity<List<StudentDTO>>(allStudent, HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }


    @DeleteMapping("/student/{studentId}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long studentId){
        String msg = adminService.deleteStudentById(studentId);
        System.out.println(msg);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/student/{studentId}")
    public ResponseEntity<SingleStudentDTO> getStudent(@PathVariable Long studentId){
        System.out.println("getStudent api executing started");
        SingleStudentDTO singleStudentDTO = adminService.getStudentById(studentId);

        if(singleStudentDTO == null){
            return ResponseEntity.notFound().build();
        }
        System.out.println("getStudent api executing done");
        return ResponseEntity.ok(singleStudentDTO);
    }


    @PutMapping("/student/{studentId}")
    public ResponseEntity<?> updateStudent(@RequestBody StudentDTO studentDTO, @PathVariable Long studentId){
        System.out.println("update api executing started");
        StudentDTO updatedStudentDTO = adminService.updateStudent(studentDTO, studentId);
        if(updatedStudentDTO==null){
            return new ResponseEntity<>("Something went wrong.", HttpStatus.BAD_REQUEST);
        }
        System.out.println("update api executing ended");
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedStudentDTO);
    }


    @PostMapping("/fee/{studentId}")
    public ResponseEntity<?> payFee(@PathVariable Long studentId, @RequestBody FeeDTO feeDTO){
        FeeDTO paidFeeDto = adminService.payFee(feeDTO, studentId);
        if(paidFeeDto==null){
            return new ResponseEntity<>("Somethign went wrong.", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(paidFeeDto);
    }


    @GetMapping("/leaves")
    public ResponseEntity<List<StudentLeaveDTO>> getAllAppliedLeaves(){
        List<StudentLeaveDTO> studentLeaveDTO = adminService.getAllAppliedLeaves();
        if(studentLeaveDTO == null){
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(studentLeaveDTO);
    }


    @GetMapping("/leave/{leaveId}/{status}")
    public ResponseEntity<?> changeLeaveStatus(@PathVariable Long leaveId, @PathVariable String status){
        System.out.println("changeLeaveStatus api executing started");
        StudentLeaveDTO studentLeaveDTO = adminService.changeLeaveStatus(leaveId,status);

        if(studentLeaveDTO == null){
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        }
        System.out.println("changeLeaveStatus api executing done");
        return ResponseEntity.ok(studentLeaveDTO);
    }


    @PostMapping("/teacher")
    public ResponseEntity<?> addTeacher(@RequestBody TeacherDTO teacherDTO){
        TeacherDTO createdTeacherDTO = adminService.postTeacher(teacherDTO);
        if(createdTeacherDTO==null){
            return ResponseEntity.status(HttpStatus.FOUND).body("Student Already Present");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTeacherDTO);
    }


    @GetMapping("/teachers")
    public ResponseEntity<List<TeacherDTO>> getAllTeachers(){
        List<TeacherDTO> allTeachersDTO =  adminService.getAllTeachers();
        if(allTeachersDTO!=null && !allTeachersDTO.isEmpty()){
            return new ResponseEntity<List<TeacherDTO>>(allTeachersDTO, HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }


}
