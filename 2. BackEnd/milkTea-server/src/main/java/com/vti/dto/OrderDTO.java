package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Payments;
import com.vti.form.OrderFormForCreatingOrUpdate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private int id;
    private int accountId;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date orderDate;

    //list sp da mua tho don hang
    private List<OrderDetailDTO> orderDetails;
    private List<PaymentDTO> payments;
    @Data
    @NoArgsConstructor
    static class OrderDetailDTO {
        private int id;
        private int productsId;
        private int quantity;
        private String size;
        private Double unitPrice;
    }

    @Data
    @NoArgsConstructor
    static class PaymentDTO {
        private int id;
        @JsonFormat(pattern="yyyy-MM-dd")
        private Date paymentDate;
        private String name;
        private String email;
        private String phone;
        private String address;
        private Payments.TypePay typePay;
        private String bankNumber;
    }
}
