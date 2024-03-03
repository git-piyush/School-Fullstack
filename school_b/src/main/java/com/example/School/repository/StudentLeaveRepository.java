package com.example.School.repository;

import com.example.School.entity.StudentLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentLeaveRepository extends JpaRepository<StudentLeave, Long> {
}
