package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface IOrderDetailService {
//    OrderDetails createOrderDetail(List<OrderDetailsFormForCreatingOrUpdating> orderDetail);
    //Phần Tiến sửa
List<OrderDetails> createOrderDetail(List<OrderDetailsFormForCreatingOrUpdating> orderDetail);

    OrderDetails getOrderDetailById(int id);

    Page<OrderDetails> getAllOrderDetails(Pageable pageable, String search);

    boolean deleteOrderDetail(int id);

    OrderDetails updateOrderDetail(int id, OrderDetailsFormForCreatingOrUpdating updatedOrderDetail);
}
