package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "security")
public class Security {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ISIN;
    private String CUSIP;
    private String issuerName;
    private Date maturityDate;
    private float coupon;
    private String type;
    private float faceValue;
    private String currency;
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "isin")
    public String getISIN() {
        return ISIN;
    }

    public void setISIN(String ISIN) {
        this.ISIN = ISIN;
    }

    @Column(name = "cusip")
    public String getCUSIP() {
        return CUSIP;
    }

    public void setCUSIP(String CUSIP) {
        this.CUSIP = CUSIP;
    }

    @Column(name = "issuer_name")
    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    @Column(name = "maturity_date")
    public Date getMaturityDate() {
        return maturityDate;
    }

    public void setMaturityDate(Date maturityDate) {
        this.maturityDate = maturityDate;
    }

    public float getCoupon() {
        return coupon;
    }

    public void setCoupon(float coupon) {
        this.coupon = coupon;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Column(name = "face_value")
    public float getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(float faceValue) {
        this.faceValue = faceValue;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Security{" +
                "id=" + id +
                ", ISIN='" + ISIN + '\'' +
                ", CUSIP='" + CUSIP + '\'' +
                ", issuerName='" + issuerName + '\'' +
                ", maturityDate=" + maturityDate +
                ", coupon=" + coupon +
                ", type='" + type + '\'' +
                ", faceValue=" + faceValue +
                ", currency='" + currency + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
