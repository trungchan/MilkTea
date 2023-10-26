package com.vti.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Entity
@Table(name = "Payments", catalog = "milk_tea_oder")
public class Payments implements Serializable {
    @NotNull
    @Column(name = "payment_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Orders orders;

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
    private String bankNumber;


    public enum TypePay {
        COD, BANKING
    }


//    public Payments ( Orders orders,Double totalPayment,
//                      String name, String email, String phone, String address,
//                      TypePay typePay, String bankNumber ) {
//        this.orders = orders;
//        this.totalPayment = totalPayment;
//        this.name = name;
//        this.email = email;
//        this.phone = phone;
//        this.address = address;
//        this.typePay = typePay;
//        this.bankNumber = bankNumber;
//    }

//    @PersistenceContext
//    private EntityManager entityManager;
//
//    @Transactional
//    public List<OrderDetails> getOrderDetailByAccountId() {
//        int accountId = this.getAccount().getId();
//        String jpql = "SELECT od FROM OrderDetails od WHERE od.orders.account.id = :accountId AND od.orders.orderDate = CURRENT_DATE";
//        return entityManager.createQuery(jpql, OrderDetails.class)
//                .setParameter("accountId", accountId)
//                .getResultList();
//
//    }
    public Payments ( Orders orders,Double totalPayment,
                      String name, String email, String phone, String address,
                      TypePay typePay, String bankNumber ) {
        this.orders = orders;
        this.totalPayment = totalPayment;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.typePay = typePay;
        this.bankNumber = bankNumber;
    }

//    @PersistenceContext
//    private EntityManager entityManager;
//
//    @Transactional
//    public List<OrderDetails> getOrderDetailByAccountId() {
//        int accountId = this.getAccount().getId();
//        String jpql = "SELECT od FROM OrderDetails od WHERE od.orders.account.id = :accountId AND od.orders.orderDate = CURRENT_DATE";
//        return entityManager.createQuery(jpql, OrderDetails.class)
//                .setParameter("accountId", accountId)
//                .getResultList();
//
//    }

    public double calculateTotalPayment() {
//        double totalPayment = 0.0;
//        List<OrderDetails> orderDetailsList = getOrderDetailByAccountId();
//
//        // Tính tổng giá trị từ danh sách OrderDetails
//        for (OrderDetails orderDetail : orderDetailsList) {
//            totalPayment += orderDetail.calculateTotalPrice(orderDetail.getProducts());
//        }
//        return totalPayment;
        return 0.0;
    }
}