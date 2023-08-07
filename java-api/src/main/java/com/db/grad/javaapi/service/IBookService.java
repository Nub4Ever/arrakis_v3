package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;

import java.util.List;

public interface IBookService {
    public List<Book> getAllBooks();

    public Book addBook(Book theBook);

    public Book getBookById(int uniqueId);
}
