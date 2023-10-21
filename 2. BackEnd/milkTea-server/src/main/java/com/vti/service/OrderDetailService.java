package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import com.vti.repository.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public OrderDetails createOrderDetail(OrderDetailsFormForCreatingOrUpdating orderDetail) {
        OrderDetails orderDetails = new OrderDetails();
        orderDetails.setOrders(orderDetail.getOrders());
        orderDetails.setProducts(orderDetail.getProduct());
        orderDetails.setQuantity(orderDetail.getQuantity());
        orderDetails.setUnitPrice(orderDetail.getUnitPrice());
        return orderDetailRepository.save(orderDetails);
    }

    @Override
    public OrderDetails getOrderDetailById(Long id) {
        return orderDetailRepository.getById(Math.toIntExact(id));
    }

    @Override
    public OrderDetails updateOrderDetail(OrderDetailsFormForCreatingOrUpdating updatedOrderDetail) {
        OrderDetails orderDetails = new OrderDetails();
        orderDetails.setOrders(updatedOrderDetail.getOrders());
        orderDetails.setProducts(updatedOrderDetail.getProduct());
        orderDetails.setQuantity(updatedOrderDetail.getQuantity());
        orderDetails.setUnitPrice(updatedOrderDetail.getUnitPrice());
        return orderDetailRepository.save(orderDetails);
    }

    @Override
    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    @Override
    public boolean deleteOrderDetail(Long id) {
        if (orderDetailRepository.existsById(id)) {
            orderDetailRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
