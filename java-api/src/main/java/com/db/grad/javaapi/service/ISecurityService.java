package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;

import java.time.LocalDate;
import java.util.List;

public interface ISecurityService {
    public List<Security> getAllSecurities();

    public Security addSecurity(Security theSecurity);

    public long getNoOfSecurities();

    LocalDate getBondsdueMaturityNext5Days(LocalDate startDate);

    LocalDate getBondsdueMaturityLast5Days(LocalDate startDate);

    public boolean removeSecurity(int uniqueId);

    public Security getSecurityById(int uniqueId);

    public Security getSecurityByISIN(String ISIN);

    public List<Security> getSecurityByIssuer(String issuerName);

    public String getSecurityByIsinAndCusip(Security security);
}
