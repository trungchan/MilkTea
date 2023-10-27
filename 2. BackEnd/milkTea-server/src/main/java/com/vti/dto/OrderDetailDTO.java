package com.vti.dto;

import com.vti.entity.OrderDetails;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {
    private int id;
    private int ordersId;
    private String productsName;

    private int quantity;
    private OrderDetails.Size size;
    private Double unitPrice;

}