package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
    @Query(nativeQuery = true, value = "select * from users where name = :name")
    Users findByName(String name);
}
