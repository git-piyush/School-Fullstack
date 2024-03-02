package com.example.School.controller;

import com.example.School.dto.StudentDTO;
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


}
