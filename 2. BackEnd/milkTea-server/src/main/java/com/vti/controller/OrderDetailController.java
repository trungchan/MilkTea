package com.vti.controller;

import com.vti.dto.OrderDetailDTO;
import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import com.vti.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.function.Function;


@RestController
@RequestMapping("api/v1/Orderdetails")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @PostMapping
    public ResponseEntity<?> createOrderDetail(@RequestBody OrderDetailsFormForCreatingOrUpdating orderDetail) {
        OrderDetails createdOrderDetail = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>(createdOrderDetail, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetailById(@PathVariable("id") Long id) {
        OrderDetails orderDetail = orderDetailService.getOrderDetailById(id);
        if (orderDetail != null) {
            return new ResponseEntity<>(orderDetail, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrderDetail(@PathVariable("id") Long id, @RequestBody OrderDetailsFormForCreatingOrUpdating updatedOrderDetail) {
        OrderDetails orderDetail = orderDetailService.getOrderDetailById(id);
        if (orderDetail != null) {
            updatedOrderDetail.setId(orderDetail.getId());
            OrderDetails updated = orderDetailService.updateOrderDetail(updatedOrderDetail);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderDetail(@PathVariable("id") Long id) {
        boolean deleted = orderDetailService.deleteOrderDetail(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllOrderDetails(Pageable pageable, @RequestParam(required = false) String search) {
        Page<OrderDetails> orderDetailsPage = orderDetailService.getAllOrderDetails(pageable, search);
        Page<OrderDetailDTO> orderDetailDTOS = orderDetailsPage.map(new Function<OrderDetails, OrderDetailDTO>() {
            @Override
            public OrderDetailDTO apply(OrderDetails orderDetails) {
                OrderDetailDTO orderDetailDTO = new OrderDetailDTO();
                orderDetailDTO.setId(orderDetails.getId());
                orderDetailDTO.setOrders(orderDetails.getOrders().getId());
                orderDetailDTO.setProductsName(orderDetails.getProducts().getProductName());
                orderDetailDTO.setSize(orderDetails.getSize().toString());
                orderDetailDTO.setQuantity(orderDetails.getQuantity());
                orderDetailDTO.setUnitPrice(orderDetails.getUnitPrice());
                return orderDetailDTO;
            }
        });
        return new ResponseEntity<>(orderDetailDTOS, HttpStatus.OK);
    }
}

