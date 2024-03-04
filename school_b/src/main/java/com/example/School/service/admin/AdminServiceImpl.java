package com.example.School.service.admin;

import com.example.School.dto.FeeDTO;
import com.example.School.dto.SingleStudentDTO;
import com.example.School.dto.StudentDTO;
import com.example.School.dto.StudentLeaveDTO;
import com.example.School.entity.Fee;
import com.example.School.entity.StudentLeave;
import com.example.School.entity.User;
import com.example.School.enums.StudentLeaveStatus;
import com.example.School.enums.UserRole;
import com.example.School.repository.FeeRepository;
import com.example.School.repository.StudentLeaveRepository;
import com.example.School.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class AdminServiceImpl implements AdminService {

    public AdminServiceImpl(UserRepository userRepository, FeeRepository feeRepository) {
        this.userRepository = userRepository;
        this.feeRepository = feeRepository;
    }

    private UserRepository userRepository;

    private FeeRepository feeRepository;

    @Autowired
    private StudentLeaveRepository studentLeaveRepository;

    @PostConstruct
    public void createAdminAccount(){

        User adminAccount = userRepository.findByUserRole(UserRole.ADMIN);
        if(adminAccount==null){
            User admin = new User();
            admin.setEmail("admin");
            admin.setName("admin");
            admin.setUserRole(UserRole.ADMIN);
            admin.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(admin);
        }

    }


    @Override
    public StudentDTO postStudent(StudentDTO studentDTO) {

        Optional<User> optionaUser = userRepository.findFirstByEmail(studentDTO.getEmail());

        if(optionaUser.isEmpty()){
            User user = new User();
            BeanUtils.copyProperties(studentDTO, user);
            user.setPassword(new BCryptPasswordEncoder().encode(studentDTO.getPassword()));
            user.setUserRole(UserRole.STUDENT);
            User createdUser = userRepository.save(user);
            StudentDTO createdStudentDTO = new StudentDTO();
            BeanUtils.copyProperties(user, createdStudentDTO);

            return createdStudentDTO;
        }

        return null;
    }

    @Override
    public List<StudentDTO> getAllStudent() {

        List<StudentDTO> allStudents = userRepository.findAllByUserRole(UserRole.STUDENT)
                .stream().map(user-> new StudentDTO(user.getId(), user.getName(), user.getEmail(), user.getPassword(), user.getFatherName(),
                        user.getMotherName(), user.getStudentClass(), user.getDob(), user.getAddress(),user.getGender())).collect(Collectors.toList());


        return allStudents;
    }

    @Override
    public String deleteStudentById(Long studentId) {

        String msg = "";
        User user = userRepository.findById(studentId).get();

        if (user != null) {
            try {
                userRepository.deleteById(studentId);
                msg = "Success";
            } catch (Exception e) {
                msg = "Fail";
            }
        }

        return msg;
    }

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

    @Override
    public StudentDTO updateStudent(StudentDTO studentDTO, Long studentId) {
        Optional<User> optionalUser = userRepository.findById(studentId);
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            user.setName(studentDTO.getName());
            user.setDob(studentDTO.getDob());
            user.setAddress(studentDTO.getAddress());
            user.setEmail(studentDTO.getEmail());
            user.setGender(studentDTO.getGender());
            user.setFatherName(studentDTO.getFatherName());
            user.setMotherName(studentDTO.getMotherName());
            user.setStudentClass(studentDTO.getStudentClass());
            User updateUser = userRepository.save(user);

            StudentDTO studentDTO1 = Stream.of(updateUser).map(u-> new StudentDTO(u.getId(), u.getName(), u.getEmail(), u.getPassword(), u.getFatherName(),
                    u.getMotherName(), u.getStudentClass(), u.getDob(), u.getAddress(),u.getGender())).collect(Collectors.toList()).get(0);
            return studentDTO1;
        }
        return null;
    }

    @Override
    public FeeDTO payFee(FeeDTO feeDTO, Long studentId) {
        Optional<User> optionalStudent = userRepository.findById(studentId);

        if(optionalStudent.isPresent()){
            Fee fee = new Fee();
            fee.setAmount(feeDTO.getAmount());
            fee.setMonth(feeDTO.getMonth());
            fee.setDescription(feeDTO.getDescription());
            fee.setCreatedDate(feeDTO.getCreatedDate());
            fee.setGivenBy(feeDTO.getGivenBy());
            fee.setUser(optionalStudent.get());
            Fee paidFee = feeRepository.save(fee);
            FeeDTO paidFeeDto = new FeeDTO();
            paidFeeDto.setId(paidFee.getId());
            paidFeeDto.setMonth(paidFee.getMonth());
            paidFeeDto.setGivenBy(paidFee.getGivenBy());
            paidFeeDto.setDescription(paidFee.getDescription());
            paidFeeDto.setCreatedDate(paidFee.getCreatedDate());
            return paidFeeDto;

        }

        return null;
    }

    @Override
    public List<StudentLeaveDTO> getAllAppliedLeaves() {
        List<StudentLeave> studentLeaves = studentLeaveRepository.findAll();
        if(studentLeaves!=null && studentLeaves.size()>0){
            List<StudentLeaveDTO> studentLeaveDTOList = studentLeaves.stream().map(student-> new StudentLeaveDTO(student.getId(),
                    student.getSubject(), student.getBody(), student.getDate(),
                    student.getStudentLeaveStatus(),student.getUser().getStudentClass(), student.getUser().getId())).collect(Collectors.toList());
            return studentLeaveDTOList;
        }
        return null;
    }

    @Override
    public StudentLeaveDTO changeLeaveStatus(Long leaveId, String status) {

        Optional<StudentLeave> optionalStudentLeave = studentLeaveRepository.findById(leaveId);
        if(optionalStudentLeave.isPresent()){
            StudentLeave studentLeave = optionalStudentLeave.get();
            if(Objects.equals(status, "Approve")){
                studentLeave.setStudentLeaveStatus(StudentLeaveStatus.Approved);
            }else{
                studentLeave.setStudentLeaveStatus(StudentLeaveStatus.Disapproved);
            }

            StudentLeave updatedStudentLeave = studentLeaveRepository.save(studentLeave);

            StudentLeaveDTO updatedStudentLeaveDTO = Stream.of(updatedStudentLeave).map(leave-> new StudentLeaveDTO(leave.getId(),
                    leave.getSubject(), leave.getBody(), leave.getDate(),
                    leave.getStudentLeaveStatus(),leave.getUser().getStudentClass(), leave.getUser().getId())).collect(Collectors.toList()).get(0);
            return updatedStudentLeaveDTO;
        }

        return null;
    }

}
