package com.example.School.service.student;

import com.example.School.dto.SingleStudentDTO;
import com.example.School.dto.StudentDTO;
import com.example.School.entity.User;
import com.example.School.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public SingleStudentDTO getStudentById(Long studentId) {
        Optional<User> optionalUser = userRepository.findById(studentId);

        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            StudentDTO studentDTO = Stream.of(user).map(u-> new StudentDTO(u.getId(), u.getName(), u.getEmail(), u.getPassword(), u.getFatherName(),
                    u.getMotherName(), u.getStudentClass(), u.getDob(), u.getAddress(),u.getGender())).collect(Collectors.toList()).get(0);
            SingleStudentDTO singleStudentDTO = new SingleStudentDTO();
            singleStudentDTO.setStudentDTO(studentDTO);
            return singleStudentDTO;
        }

        return null;
    }
}
