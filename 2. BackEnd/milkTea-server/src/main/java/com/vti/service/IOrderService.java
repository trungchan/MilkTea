package com.vti.service;

import com.vti.entity.Orders;
import com.vti.form.OrderFilterForm;
import com.vti.form.OrderFormForCreatingOrUpdate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
    Page<Orders> getAllOrder( Pageable pageable, OrderFilterForm form );

    Orders getOrderById ( int id );

    Orders createOrUpdateOrder ( OrderFormForCreatingOrUpdate form );

    void deleteOrder ( int id );
    int deleteManyOrder( List<Integer> idDeleteList);
}
