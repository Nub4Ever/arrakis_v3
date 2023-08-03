package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.*;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SecurityServiceTest {
    @Mock
    private SecurityRepository securityRepository;

    @InjectMocks
    private SecurityService service;

    @Test
    void get_all_bonds_return_succes() {
        Security security1 = new Security();
        security1.setISIN("231414412");
        Mockito.when(securityRepository.save(security1)).thenReturn(security1);
        Mockito.when(securityRepository.count()).thenReturn(1L);
        service.addSecurity(security1);

        Security security2 = new Security();
        security2.setISIN("543232");
        Mockito.when(securityRepository.save(security2)).thenReturn(security2);
        Mockito.when(securityRepository.count()).thenReturn(2L);
        service.addSecurity(security2);


        int expectedResult = 2;
        long actualResult = service.getNoOfSecurities();

        assertEquals(expectedResult, actualResult);
    }

    @Test
    void get_all_bonds_return_fail() {
        Security security1 = new Security();
        security1.setISIN("231414412");
        Mockito.when(securityRepository.save(security1)).thenReturn(security1);
        Mockito.when(securityRepository.count()).thenReturn(1L);
        service.addSecurity(security1);

        Security security2 = new Security();
        security2.setISIN("543232");
        Mockito.when(securityRepository.save(security2)).thenReturn(security2);
        Mockito.when(securityRepository.count()).thenReturn(2L);
        service.addSecurity(security2);

        Security security3 = new Security();
        security3.setISIN("54322332");
        service.addSecurity(security3);


        int expectedResult = 3;
        long actualResult = service.getNoOfSecurities();

        assertNotEquals(expectedResult, actualResult);
    }

    @Test
    public void add_a_bond_return_number_of_bonds_in_repo_is_one()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("13125513");
        Mockito.when(securityRepository.save(theSecurity)).thenReturn(theSecurity);
        Mockito.when(securityRepository.count()).thenReturn(1L);
        service.addSecurity( theSecurity );

        int expectedResult = 1;

        // act
        long actualResult = service.getNoOfSecurities();

        // assert
        assertEquals( expectedResult, actualResult);
    }

    @Test
    public void add_bond_and_remove_bond_return_number_of_bonds_is_zero()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("312312");
        Mockito.when(securityRepository.save(theSecurity)).thenReturn(theSecurity);
        Security uniqueSecurity = service.addSecurity( theSecurity );

        Optional<Security> opt = Optional.of(theSecurity);
        Mockito.when(securityRepository.findById(theSecurity.getId())).thenReturn(opt);

        long expectedResult = 0;
        boolean expectedStatus = true;

        // act
        boolean actualStatus = service.removeSecurity( uniqueSecurity.getId() );
        long actualResult = service.getNoOfSecurities();

        // assert
        assertEquals( expectedStatus, actualStatus);
        assertEquals( expectedResult, actualResult );
        verify(securityRepository, times(1)).delete(theSecurity);
    }

    @Test
    public void add_bond_with_same_isin_return_only_one_bond()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("312312");
        Mockito.when(securityRepository.save(theSecurity)).thenReturn(theSecurity);
        Security uniqueSecurity = service.addSecurity( theSecurity );
        Mockito.when(securityRepository.count()).thenReturn(1L);

        theSecurity = new Security();
        theSecurity.setISIN("312312");
        uniqueSecurity = service.addSecurity( theSecurity );
        if (uniqueSecurity != null) {
            Mockito.when(securityRepository.save(theSecurity)).thenReturn(theSecurity);
            Mockito.when(securityRepository.count()).thenReturn(2L);
        }

        int expectedResult = 1;

        // act
        long actualResult = service.getNoOfSecurities();

        // assert
        assertEquals( expectedResult, actualResult);
    }

    @Test
    public void add_bond_and_remove_bond_that_does_not_exist_return_number_of_bonds_is_one()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("3141412");
        Security uniqueSecurity = service.addSecurity( theSecurity );

        int invalidId = 33;
        long expectedResult = 1;
        boolean expectedStatus = false;

        Optional<Security> opt = Optional.empty();
        Mockito.when(securityRepository.findById(invalidId)).thenReturn(opt);

        Mockito.when(securityRepository.count()).thenReturn(1L);

        // act
        // There is no Security with ID == 33
        boolean actualStatus = service.removeSecurity( invalidId );
        long actualResult = service.getNoOfSecurities();

        // assert
        assertEquals( expectedStatus, actualStatus);
        assertEquals( expectedResult, actualResult );
        verify(securityRepository, times(0)).delete(theSecurity);
    }

    @Test
    public void find_bond_by_valid_id_returns_one_bond()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("3131ada");
        service.addSecurity( theSecurity );
        theSecurity = new Security();
        theSecurity.setISIN("313124234ada");
        Mockito.when(securityRepository.save(theSecurity)).thenReturn(theSecurity);
        Security addedSecurity = service.addSecurity( theSecurity );
        Security expectedSecurity = theSecurity;
        theSecurity = new Security();
        theSecurity.setISIN("saf3242");
        service.addSecurity( theSecurity );

        Security jpaSecurity = addedSecurity;
        Optional<Security> opt = Optional.of(addedSecurity);
        Mockito.when(securityRepository.findById(addedSecurity.getId())).thenReturn(opt);

        // act
        Security actualResult = service.getSecurityById( addedSecurity.getId() );

        // assert
        assertEquals( expectedSecurity.getId(), actualResult.getId() );
        assertEquals( expectedSecurity.getISIN(), actualResult.getISIN());
    }

    @Test
    public  void find_bond_by_isin_returns_one_bond()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setISIN("hgd432");
        service.addSecurity( theSecurity );
        theSecurity = new Security();
        theSecurity.setISIN("213ada");
        service.addSecurity( theSecurity );
        Security expectedSecurity = theSecurity;
        String SecurityToFind = "213ada";
        theSecurity = new Security();
        theSecurity.setISIN("546hgd");
        service.addSecurity( theSecurity );
        Mockito.when(securityRepository.findByISIN(Mockito.any())).thenReturn(expectedSecurity);

        // act
        Security actualResult = service.getSecurityByISIN(SecurityToFind);

        // assert
        assertEquals( expectedSecurity.getId(), actualResult.getId() );
        assertEquals( expectedSecurity.getISIN(), actualResult.getISIN());
    }

    @Test
    public  void  find_bond_by_issuer_name_returns_all_bonds()
    {
        // arrange
        Security theSecurity = new Security();
        theSecurity.setIssuerName("Frank");
        service.addSecurity( theSecurity );
        Security expectedSecurity = theSecurity;
        ArrayList<Security> expectedList = new ArrayList<>();
        expectedList.add(expectedSecurity);

        theSecurity = new Security();
        theSecurity.setIssuerName("Frank");
        service.addSecurity( theSecurity );
        expectedSecurity = theSecurity;
        expectedList.add(expectedSecurity);



        theSecurity = new Security();
        theSecurity.setIssuerName("Penny");
        service.addSecurity( theSecurity );



        String SecurityToFind = "Frank";
        Mockito.when(securityRepository.findByIssuer(SecurityToFind)).thenReturn(expectedList);

        // act
        List<Security> actualResult = service.getSecurityByIssuer( SecurityToFind );

        // assert
        assertEquals(expectedList, actualResult.size());
    }

}
