package com.vti.controller;

import com.vti.entity.OrderDetails;
import com.vti.form.OrderDetailsFormForCreatingOrUpdating;
import com.vti.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order-details")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @PostMapping
    public ResponseEntity<OrderDetails> createOrderDetail(@RequestBody OrderDetailsFormForCreatingOrUpdating orderDetail) {
        OrderDetails createdOrderDetail = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>(createdOrderDetail, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDetails> getOrderDetailById(@PathVariable("id") Long id) {
        OrderDetails orderDetail = orderDetailService.getOrderDetailById(id);
        if (orderDetail != null) {
            return new ResponseEntity<>(orderDetail, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDetails> updateOrderDetail(@PathVariable("id") Long id, @RequestBody OrderDetailsFormForCreatingOrUpdating updatedOrderDetail) {
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
    public ResponseEntity<Void> deleteOrderDetail(@PathVariable("id") Long id) {
        boolean deleted = orderDetailService.deleteOrderDetail(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<OrderDetails>> getAllOrderDetails() {
        List<OrderDetails> orderDetails = orderDetailService.getAllOrderDetails();
        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }
}
