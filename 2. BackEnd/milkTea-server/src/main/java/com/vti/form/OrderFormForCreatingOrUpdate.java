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


    public Orders toOrder( Account account){
        Orders order = new Orders(account,orderDate);
        order.setId(id);
        return order;

    }
}
