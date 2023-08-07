import http from './axios-common';

export function getAllSecurities(){
    return http.get("/bonds");
}

export function getAllUsers(){
    return http.get("/users");
}

export function getAllBookUsers(){
    return http.get("/bookusers");
}

export function getAllBooks(){
    return http.get("/books");
}