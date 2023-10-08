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
@Table(name = "Orders", catalog = "milk_tea_oder")
public class Orders implements Serializable {
    @NotNull
    @Column(name = "order_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @Column(name = "order_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date orderDate;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Products products;

    @Column(name = "quantity", columnDefinition = "1")
    private int quantity;

    @Column(name = "unit_price")
    private Double unitPrice;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "phone_number", length = 15)
    private String phone;

    @Column(name = "address", length = 255)
    private String address;

    @Column(name = "order_status")
    @Enumerated(EnumType.STRING)
    private OderStatus oderStatus;

    @Column(name = "type_pay")
    @Enumerated(EnumType.STRING)
    private TypePay typePay;

    @Column(name = "bank_number")
    private int bankNumber;


    public enum OderStatus {
        PENDING, SHIPPED, DELIVERED
    }

    public enum TypePay{
        COD, BANKING
    }












}
