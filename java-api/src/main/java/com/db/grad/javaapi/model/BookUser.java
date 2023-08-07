package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(BookUser.class)
@Table(name = "book_user")
public class BookUser implements Serializable {
    @Id
    private int bookId;
    @Id
    private int userId;

    @Column(name = "book_id")
    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    @Column(name = "user_id")
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "BookUser{" +
                "bookId=" + bookId +
                ", userId=" + userId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookUser bookUser = (BookUser) o;
        return bookId == bookUser.bookId && userId == bookUser.userId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookId, userId);
    }
}
