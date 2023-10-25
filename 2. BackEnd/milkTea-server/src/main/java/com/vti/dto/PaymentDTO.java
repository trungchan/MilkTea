package com.vti.dto;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Payments;
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
    private Payments.TypePay typePay;
    private String bankNumber;
}
