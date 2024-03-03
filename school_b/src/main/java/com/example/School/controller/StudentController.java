package com.example.School.controller;

import com.example.School.dto.SingleStudentDTO;
import com.example.School.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
