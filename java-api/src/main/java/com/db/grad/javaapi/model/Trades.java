package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "trades")
public class Trades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int bookId;
    private int securityId;
    private int counterpartyId;
    private String currency;
    private String status;
    private int quantity;
    private float unitPrice;
    private String buySell;
    private Date tradeDate;
    private Date settlementDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "book_id")
    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    @Column(name = "security_id")
    public int getSecurityId() {
        return securityId;
    }

    public void setSecurityId(int securityId) {
        this.securityId = securityId;
    }

    @Column(name = "counterparty_id")
    public int getCounterpartyId() {
        return counterpartyId;
    }

    public void setCounterpartyId(int counterpartyId) {
        this.counterpartyId = counterpartyId;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public float getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(float unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Column(name = "buy_sell")
    public String getBuySell() {
        return buySell;
    }

    public void setBuySell(String buySell) {
        this.buySell = buySell;
    }

    @Column(name = "trade_date")
    public Date getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(Date tradeDate) {
        this.tradeDate = tradeDate;
    }

    @Column(name = "settlement_date")
    public Date getSettlementDate() {
        return settlementDate;
    }

    public void setSettlementDate(Date settlementDate) {
        this.settlementDate = settlementDate;
    }

    @Override
    public String toString() {
        return "Trades{" +
                "id=" + id +
                ", bookId=" + bookId +
                ", securityId=" + securityId +
                ", counterpartyId=" + counterpartyId +
                ", currency='" + currency + '\'' +
                ", status='" + status + '\'' +
                ", quantity=" + quantity +
                ", unitPrice=" + unitPrice +
                ", buySell='" + buySell + '\'' +
                ", tradeDate=" + tradeDate +
                ", settlementDate=" + settlementDate +
                '}';
    }
}
