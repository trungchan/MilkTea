package com.vti.form;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import lombok.*;

import java.util.Date;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentFormForCreatingOrUpdating {
    private int id;
    private Orders orders;
    private Date paymentDate;
    private Double totalPayment;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String bankNumber;


}
