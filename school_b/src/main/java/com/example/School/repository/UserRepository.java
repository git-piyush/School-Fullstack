package com.example.School.repository;

import com.example.School.entity.User;
import com.example.School.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserRole(UserRole userRole);

    Optional<User> findFirstByEmail(String email);

    List<User> findAllByUserRole(UserRole userRole);

}
