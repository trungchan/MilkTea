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
    private Long id;
    private Orders orders;

    private int accountId;
    private Products product;

    private int quantity;

    private Double unitPrice;



}