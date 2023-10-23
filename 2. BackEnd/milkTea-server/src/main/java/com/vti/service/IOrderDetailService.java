package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IOrderDetailService {
    OrderDetails createOrderDetail(OrderDetailsFormForCreatingOrUpdating orderDetail);

    OrderDetails getOrderDetailById(Long id);

    OrderDetails updateOrderDetail(OrderDetailsFormForCreatingOrUpdating updatedOrderDetail);

    Page<OrderDetails> getAllOrderDetails(Pageable pageable, String search);

    boolean deleteOrderDetail(Long id);
}