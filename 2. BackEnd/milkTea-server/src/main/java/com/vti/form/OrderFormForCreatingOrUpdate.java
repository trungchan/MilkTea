package com.vti.form;


import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Products;
import lombok.*;
import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderFormForCreatingOrUpdate {
    private int id;
    private int accountId;
    private Date orderDate;
    private int productsId;

    private int quantity;
    private Orders.Size size;
    private String name;
    private String email;
    private String phone;
    private String address;
    private Orders.OrderStatus orderStatus;
    private Orders.TypePay typePay;
    private int bankNumber;


    public Orders toOrder( Account account, Products products){
        Orders order = new Orders(account,orderDate, products, quantity, size, name,
                email, phone,address, orderStatus, typePay, bankNumber);
        order.setId(id);
        return order;

    }
}
