package com.vti.dto;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Products;
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
    private String size;
    private Double unitPrice;

}
