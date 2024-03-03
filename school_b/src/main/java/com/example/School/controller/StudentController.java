package com.example.School.controller;

import com.example.School.dto.SingleStudentDTO;
import com.example.School.dto.StudentLeaveDTO;
import com.example.School.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/{studentId}")
    public ResponseEntity<SingleStudentDTO> getStudent(@PathVariable Long studentId){
        System.out.println("getStudent api executing started");
        SingleStudentDTO singleStudentDTO = studentService.getStudentById(studentId);

        if(singleStudentDTO == null){
            return ResponseEntity.notFound().build();
        }
        System.out.println("getStudent api executing done");
        return ResponseEntity.ok(singleStudentDTO);
    }

    @PostMapping("leave")
    public ResponseEntity<?> applyLeave(@RequestBody StudentLeaveDTO studentLeaveDTO){
        StudentLeaveDTO studentLeaveDTO1 = studentService.applyLeave(studentLeaveDTO);
        if(studentLeaveDTO1 == null){
            return new ResponseEntity<>("Something Went wrong", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(studentLeaveDTO1);
    }



}
