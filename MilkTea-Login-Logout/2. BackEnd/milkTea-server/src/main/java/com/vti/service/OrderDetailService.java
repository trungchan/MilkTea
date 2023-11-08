package com.vti.service;

import com.vti.entity.OrderDetails;
import com.vti.entity.Orders;
import com.vti.entity.Products;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import com.vti.repository.IOrderDetailRepository;
import com.vti.repository.IOrderRepository;
import com.vti.repository.IProductsRepository;
import com.vti.specification.OderDetailSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IProductsRepository productsRepository;

//    @Override
//    public OrderDetails createOrderDetail(OrderDetailsFormForCreatingOrUpdating createOrderDetail) {
//        Orders orders = orderRepository.getById(createOrderDetail.getOrdersId());
//        Products products = productsRepository.getById(createOrderDetail.getProductId());
//
//        OrderDetails orderDetails = new OrderDetails();
//        orderDetails.setId(createOrderDetail.getId());
//        orderDetails.setOrders(orders);
//        orderDetails.setProducts(products);
//        orderDetails.setQuantity(createOrderDetail.getQuantity());
//        orderDetails.setSize(OrderDetails.Size.valueOf(createOrderDetail.getSize().toString()));
//        orderDetails.setUnitPrice(createOrderDetail.getUnitPrice());
//        return orderDetailRepository.save(orderDetails);
//    }

    //------------------------------------------Start Phần Tiến sửa------------------------------------------------
@Override
public List<OrderDetails> createOrderDetail(List<OrderDetailsFormForCreatingOrUpdating> createOrderDetails) {
    List<OrderDetails> createdOrderDetails = new ArrayList<>();

    for (OrderDetailsFormForCreatingOrUpdating orderDetailForm : createOrderDetails) {
        Orders orders = orderRepository.getById(orderDetailForm.getOrdersId());
        Products products = productsRepository.getById(orderDetailForm.getProductId());

        OrderDetails orderDetails = new OrderDetails();
        orderDetails.setOrders(orders);
        orderDetails.setProducts(products);
        orderDetails.setQuantity(orderDetailForm.getQuantity());
        orderDetails.setSize(OrderDetails.Size.valueOf(orderDetailForm.getSize()));
        orderDetails.setUnitPrice(orderDetailForm.getUnitPrice());

        createdOrderDetails.add(orderDetailRepository.save(orderDetails));
    }

    return createdOrderDetails;
}
    //------------------------------------------End Phần Tiến sửa------------------------------------------------

    @Override
    public OrderDetails getOrderDetailById(int id) {
        return orderDetailRepository.getById(id);
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
    public boolean deleteOrderDetail(int id) {
        if (orderDetailRepository.existsById(id)) {
            orderDetailRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public OrderDetails updateOrderDetail(int id, OrderDetailsFormForCreatingOrUpdating updatedOrderDetail) {
        Orders orders = orderRepository.getById(updatedOrderDetail.getOrdersId());
        Products products = productsRepository.getById(updatedOrderDetail.getProductId());
        OrderDetails orderDetails = orderDetailRepository.getById(id);
        orderDetails.setId(updatedOrderDetail.getId());
        orderDetails.setOrders(orders);
        orderDetails.setProducts(products);
        orderDetails.setQuantity(updatedOrderDetail.getQuantity());
        orderDetails.setSize(OrderDetails.Size.valueOf(updatedOrderDetail.getSize().toString()));
        orderDetails.setUnitPrice(updatedOrderDetail.getUnitPrice());
        OrderDetails orderDetailsUpdate = orderDetailRepository.save(orderDetails);
        return orderDetailsUpdate;
    }
}
