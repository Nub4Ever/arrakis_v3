package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.service.BookService;
import com.db.grad.javaapi.service.BookUserService;
import com.db.grad.javaapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BookUserController {
    private BookUserService bookUserService;
    private UserService userService;
    private BookService bookService;

    @Autowired
    public BookUserController(BookUserService bookUserService, UserService userService,
                              BookService bookService) {
        this.bookUserService = bookUserService;
        this.userService = userService;
        this.bookService = bookService;
    }

    @GetMapping("/bookusers")
    public List<BookUser> getAllBookUsers() {
        return bookUserService.getAllBookUser();
    }

    @GetMapping("/tradingBooks:{userId}")
    public List<BookUser> getMyBooks(@PathVariable int userId){
        List <BookUser> bookUserData =  bookUserService.getBookUserById(userId);

        return bookUserData;
    }

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
}
