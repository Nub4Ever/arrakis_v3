package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.repository.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BookUserService implements IBookUserService{

    private BookUserRepository bookUserRepository;

    @Autowired
    public BookUserService(BookUserRepository bookUserRepository) {
        this.bookUserRepository = bookUserRepository;
    }

    @Override
    public List<BookUser> getAllBookUser() {
        return bookUserRepository.findAll();
    }

    @Override
    public BookUser getBookUserById(int id) {
        return (BookUser) bookUserRepository.findBookbyUserId(id);
    }

}
