package com.example.School.controller;

import com.example.School.dto.TeacherDTO;
import com.example.School.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private HomeService homeService;
    @GetMapping("/teachers")
    public ResponseEntity<List<TeacherDTO>> getAllTeachers(){
        List<TeacherDTO> allTeachers = homeService.getAllTeachers();
        return ResponseEntity.ok(allTeachers);
    }

}
