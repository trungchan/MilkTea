package com.vti.form;


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
