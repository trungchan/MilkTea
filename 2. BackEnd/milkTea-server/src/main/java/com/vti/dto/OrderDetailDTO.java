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
    private Long id;
    private int orders;
    private String productsName;
    private int quantity;
    private String size;
    private Double unitPrice;

}
