import http from './axios-common';

export function getAllSecurities(){
    return http.get("/bonds");
}