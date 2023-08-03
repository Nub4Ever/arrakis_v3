package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SecurityController {
    private SecurityService securityService;

    @Autowired
    public SecurityController(SecurityService securityService) {
        this.securityService = securityService;
    }

    @GetMapping("/bonds")
    public List<Security> getAllSecurities() {
        return securityService.getAllSecurities();
    }

    @GetMapping("/bonds/count")
    public long getNoOfSecurities() {
        return securityService.getNoOfSecurities();
    }

    @GetMapping("/bonds/issuer={issuerName}")
    public List<Security> getSecurityByIssuer(@PathVariable String issuerName){
        return securityService.getSecurityByIssuer(issuerName);
    }
}
