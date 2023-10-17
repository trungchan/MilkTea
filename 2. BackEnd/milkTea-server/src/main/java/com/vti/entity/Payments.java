package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Payments", catalog = "milk_tea_oder")
public class Payments implements Serializable {
    @NotNull
    @Column(name = "order_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @Column(name = "payment_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date paymentDate;

    @Column(name = "total_payment")
    private Double totalPayment;
    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "phone_number", length = 15)
    private String phone;

    @Column(name = "address", length = 255)
    private String address;

    @Column(name = "type_pay")
    @Enumerated(EnumType.STRING)
    private TypePay typePay = TypePay.COD;

    @Column(name = "bank_number")
    private int bankNumber;


    public enum TypePay{
        COD, BANKING
    }


    public Payments ( Account account,
                      String name, String email, String phone, String address,
                      TypePay typePay, int bankNumber ) {
        this.account = account;
        this.totalPayment = calculateTotalPayment();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.typePay = typePay;
        this.bankNumber = bankNumber;
    }

    public double calculateTotalPayment() {
        return 0.0;
    }
}
