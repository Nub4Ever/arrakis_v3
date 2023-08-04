package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BookUser;

import java.util.List;

public interface IBookUserService {
    List<BookUser> getAllBookUser();

    BookUser getBookUserById(int id);
}
