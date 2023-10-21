package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;

import java.util.List;

public interface IOrderDetailService {
    OrderDetails createOrderDetail(OrderDetailsFormForCreatingOrUpdating orderDetail);

    OrderDetails getOrderDetailById(Long id);

    OrderDetails updateOrderDetail(OrderDetailsFormForCreatingOrUpdating updatedOrderDetail);

    List<OrderDetails> getAllOrderDetails();

    boolean deleteOrderDetail(Long id);
}
