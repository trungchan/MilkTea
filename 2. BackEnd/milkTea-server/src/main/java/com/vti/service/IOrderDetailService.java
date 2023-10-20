package com.vti.service;

import com.vti.entity.OrderDetails;

import java.util.List;

public interface IOrderDetailService {
    OrderDetails createOrderDetail(OrderDetails orderDetail);

    OrderDetails getOrderDetailById(Long id);

    OrderDetails updateOrderDetail(OrderDetails updatedOrderDetail);

    boolean deleteOrderDetail(Long id);

    List<OrderDetails> getAllOrderDetails();
}
