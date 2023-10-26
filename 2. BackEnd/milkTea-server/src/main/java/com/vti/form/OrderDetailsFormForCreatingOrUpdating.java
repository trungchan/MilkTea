package com.vti.form;

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
public class OrderDetailsFormForCreatingOrUpdating {
    private int id;
    private int ordersId;
    private int size;
    private String productName;
    private int quantity;
    private Double unitPrice;
}
