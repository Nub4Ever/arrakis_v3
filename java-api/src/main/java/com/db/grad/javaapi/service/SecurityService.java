package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
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
    public LocalDate getBondsdueMaturityNext5Days(LocalDate startDate){
        int BusinessDays = 5;
        LocalDate futureDate = startDate;

        for (int addedDays = 0; addedDays < BusinessDays; futureDate = futureDate.plusDays(1)){
            if (futureDate.getDayOfWeek() != DayOfWeek.SATURDAY & futureDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                addedDays++;
            }
        }
        return getBondsdueMaturityNext5Days(futureDate);
    }

    @Override
    public LocalDate getBondsdueMaturityLast5Days(LocalDate startDate){
        LocalDate HistoryDate = startDate;
        int BusinessDays = 5;

        for (int addedDays = 0; addedDays < BusinessDays; HistoryDate = HistoryDate.minusDays(1)){
            if (HistoryDate.getDayOfWeek() != DayOfWeek.SATURDAY & HistoryDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                addedDays++;
            }
        }
        return getBondsdueMaturityLast5Days(HistoryDate);
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
