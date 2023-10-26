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
    private String size;
    private int productId;
    private int quantity;
    private Double unitPrice;

//    {
//              "id": 1,
//            "ordersId": 123,
//            "size": "XL",
//            "productId": 456,
//            "quantity": 2,
//            "unitPrice": 9.99
//    }
}
