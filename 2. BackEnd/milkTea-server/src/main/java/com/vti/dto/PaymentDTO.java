package com.vti.dto;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
public class PaymentDTO {
    private Long id;
    private Orders orders;

    private String name;
    private String email;
    private String phone;
    private String address;
    private Long bankNumber;
}
