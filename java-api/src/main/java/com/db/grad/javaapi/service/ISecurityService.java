package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;

import java.util.List;

public interface ISecurityService {
    public List<Security> getAllSecurities();

    public Security addSecurity(Security theSecurity);

    public long getNoOfSecurities();

    public boolean removeSecurity(int uniqueId);

    public Security getSecurityById(int uniqueId);

    public Security getSecurityByISIN(String ISIN);

    public List<Security> getSecurityByIssuer(String issuerName);

    public String getSecurityByIsinAndCusip(Security security);
}
