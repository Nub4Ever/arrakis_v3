package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SecurityService implements ISecurityService{
    private SecurityRepository securityRepository;

    @Autowired
    public SecurityService(SecurityRepository securityRepository) {
        this.securityRepository = securityRepository;
    }

    @Override
    public List<Security> getAllSecurities() {
        return securityRepository.findAll();
    }

    @Override
    public Security addSecurity(Security theSecurity) {
        for (Security security : securityRepository.findAll()){
            if (security.getISIN().equals(theSecurity.getISIN())) {
                return null;
            }
        }

        return securityRepository.save(theSecurity);
    }

    @Override
    public long getNoOfSecurities() {
        return securityRepository.count();
    }

    @Override
    public boolean removeSecurity(int uniqueId) {
        boolean result = false;

        Optional<Security> theSecurity = securityRepository.findById(uniqueId);
        if(theSecurity.isPresent())
        {
            securityRepository.delete(theSecurity.get());
            result = true;
        }

        return  result;
    }

    @Override
    public Security getSecurityById(int uniqueId) {
        return securityRepository.findById(uniqueId).get();
    }

    @Override
    public Security getSecurityByISIN(String ISIN) {
        return securityRepository.findByISIN(ISIN);
    }

    @Override
    public List<Security> getSecurityByIssuer(String issuerName) {
        return securityRepository.findByIssuer(issuerName);
    }

    @Override
    public String getSecurityByIsinAndCusip(Security security) {
        return "Bond " + security.getId() + " has CUSIP: " + security.getCUSIP()
                + " and ISIN: " + security.getISIN();
    }
}
