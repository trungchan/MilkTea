package com.vti.dto;

import com.vti.entity.Payments;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.*;


@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
@ToString
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
