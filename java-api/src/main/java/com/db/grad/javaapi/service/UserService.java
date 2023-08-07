package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> getAllUsers() {return userRepository.findAll();}

    @Override
    public Users addUsers(Users theUser) {
        for (Users users : userRepository.findAll()){
            if (users.getId()==(users.getId())) {
                return null;
            }
        }
        return userRepository.save(theUser);
    }

    @Override
    public Users getUserById(int uniqueId) {
        return userRepository.findById(uniqueId).get();
    }

    @Override
    public Users getUserByName(String name){
        return userRepository.findByName(name);
    }
}
