package com.vti.form;


import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Products;
import lombok.*;
import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderFormForCreatingOrUpdate {
    private int id;
    private int accountId;
    private Date orderDate;

    // list order detail
//    List<OrderDetailForm> orderDetailForms;


    public Orders toOrder( Account account){
        Orders order = new Orders(account,orderDate);
        order.setId(id);
        return order;

    }

//    public class OrderDetailForm{
//        private int productId;
//        private int quantity;
//        private int price;
//
//    }
}
