package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import com.vti.repository.IOrderDetailRepository;
import com.vti.specification.OderDetailSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
@Service
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
    public Page<OrderDetails> getAllOrderDetails(Pageable pageable, String search) {
        Specification<OrderDetails> where = null;
        if (!StringUtils.isEmpty(search)) {
            OderDetailSpecification nameSpecification = new OderDetailSpecification("order", "LIKE", search);
            OderDetailSpecification priceSpecification = new OderDetailSpecification("product", "LIKE", search);
            OderDetailSpecification infoSpecification = new OderDetailSpecification("size", "LIKE", search);
            OderDetailSpecification categorySpecification = new OderDetailSpecification("quantity", "LIKE", search);

            where = Specification.where(nameSpecification).or(priceSpecification).or(infoSpecification)
                    .or(categorySpecification);
        }
        return orderDetailRepository.findAll(where, pageable);
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
