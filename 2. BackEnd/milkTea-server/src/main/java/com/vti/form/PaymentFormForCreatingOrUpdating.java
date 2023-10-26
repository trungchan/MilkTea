package com.vti.form;

import com.vti.entity.Orders;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentFormForCreatingOrUpdating {
    private int id;
    private int orderId;
    private Date paymentDate;
    private Double totalPayment;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String bankNumber;


}
