package com.vti.dto;

import com.vti.entity.OrderDetails;
import com.vti.entity.Orders;
import com.vti.entity.Products;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {
    private Long id;
    private int ordersId;
    private String name;
    private int quantity;
    private OrderDetails.Size size;
    private Double unitPrice;
}
