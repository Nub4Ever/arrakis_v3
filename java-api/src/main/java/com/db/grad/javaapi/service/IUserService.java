package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Users;
import java.util.List;

public interface IUserService {
    public List<Users> getAllUsers();

    public Users addUsers(Users theUser);

    public Users getUserById(int uniqueId);

    Users getUserByName(String name);
}
