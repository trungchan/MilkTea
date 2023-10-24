package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Account;
import com.vti.entity.Orders;
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
    private String accountId;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date orderDate;

    //list sp da mua tho don hang
    private List<OrderDetailDTO> o;
    private List<PaymentDTO> p;
    @Data
    @NoArgsConstructor
    static class OrderDetailDTO {
        private int id;
        private String orders;
        private String products;
        private int quantity;
        private String size;
        private Double unitPrice;
    }

    @Data
    @NoArgsConstructor
    static class PaymentDTO {
        private Long id;
        private int ordersId;
        private String name;
        private String email;
        private String phone;
        private String address;
        private Long bankNumber;
    }
}
