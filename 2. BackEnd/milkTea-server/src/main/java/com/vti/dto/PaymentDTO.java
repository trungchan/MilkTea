package com.vti.dto;

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
    private int ordersId;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String bankNumber;
    private Payments.TypePay typePay;
}
