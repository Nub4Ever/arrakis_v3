package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.service.BookUserService;
import com.db.grad.javaapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookUserController {

    @Autowired
    public BookUserController(BookUserService bookUserService) {
        this.bookUserService = bookUserService;
    }

    @Autowired
    BookUserService bookUserService;
    @Autowired
    UserService userService;

    @GetMapping("/myTradingBooks")
    public List<BookUser> getMyBooks(@PathVariable String name){ //should be changed to unique id (?)

        Users user = (Users) userService.getUserByName(name);
        List <BookUser> bookUserData = (List<BookUser>) bookUserService.getBookUserById(user.getId()); //remove redundant

        return bookUserData;
    }
}
