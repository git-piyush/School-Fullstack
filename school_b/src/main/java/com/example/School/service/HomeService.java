package com.example.School.service;

import com.example.School.dto.TeacherDTO;
import com.example.School.entity.Teacher;
import com.example.School.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HomeService {

    @Autowired
    private TeacherRepository teacherRepository;
    public List<TeacherDTO> getAllTeachers(){
        List<Teacher> allTeachers = teacherRepository.findAll();

        List<TeacherDTO> teacherDTOList = allTeachers.stream().map(teacher -> new TeacherDTO(teacher.getId(),teacher.getEmail(),teacher.getName()
                ,teacher.getGender(),teacher.getDepartment(),teacher.getQualification(),
                teacher.getDob(), teacher.getAddress())).collect(Collectors.toList());

        return teacherDTOList;
    }

}
