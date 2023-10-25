package com.vti.dto;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Payments;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
public class PaymentDTO {
    private int id;
    private String orders;
    private String totalPayment;
    private String paymentDate;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String bankNumber;
    private String typePay;
}
