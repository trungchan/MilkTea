package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IOrderDetailService {
    OrderDetails createOrderDetail(OrderDetailsFormForCreatingOrUpdating orderDetail);

    OrderDetails getOrderDetailById(int id);

    Page<OrderDetails> getAllOrderDetails(Pageable pageable, String search);

    boolean deleteOrderDetail(int id);

    OrderDetails updateOrderDetail(int id, OrderDetailsFormForCreatingOrUpdating updatedOrderDetail);
}
