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

import java.util.List;
import java.util.function.Function;


@RestController
@RequestMapping("api/v1/Orderdetails")
@CrossOrigin("*")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

//    @PostMapping
//    public ResponseEntity<?> createOrderDetail(@RequestBody OrderDetailsFormForCreatingOrUpdating orderDetail) {
//        orderDetailService.createOrderDetail(orderDetail);
//        return new ResponseEntity<>("created", HttpStatus.CREATED);
//    }

//    @PostMapping
//    public ResponseEntity<?> createOrderDetail(@RequestBody List<OrderDetailsFormForCreatingOrUpdating> orderDetail) {
//        List<OrderDetails> createdOrderDetails = (List<OrderDetails>) orderDetailService.createOrderDetail(orderDetail);
//        return new ResponseEntity<>("created", HttpStatus.CREATED);
//    }
//---------------- Start Phần Tiến sửa------------------------
    @PostMapping
    public ResponseEntity<?> createOrderDetail(@RequestBody List<OrderDetailsFormForCreatingOrUpdating> orderDetail) {
        List<OrderDetails> createdOrderDetails = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>("Create successfully!", HttpStatus.CREATED);
    }
    //----------------End Phần Tiến sửa------------------------
    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetailById(@PathVariable("id") int id) {
        try {
            OrderDetails orderDetails = orderDetailService.getOrderDetailById(id);
            // chuyển đổi dữ liệu
            OrderDetailDTO orderDetailDTO = new OrderDetailDTO();
            orderDetailDTO.setId(orderDetails.getId());
            orderDetailDTO.setOrdersId(orderDetails.getOrders().getId());
            orderDetailDTO.setProductsName(orderDetails.getProducts().getProductName());
            orderDetailDTO.setSize(orderDetails.getSize());
            orderDetailDTO.setQuantity(orderDetails.getQuantity());
            orderDetailDTO.setUnitPrice(orderDetails.getUnitPrice());
            return new ResponseEntity<>(orderDetailDTO, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrderDetail(@PathVariable("id") int id, @RequestBody OrderDetailsFormForCreatingOrUpdating updatedOrderDetail) {
//        OrderDetails orderDetail = orderDetailService.getOrderDetailById(id);

           orderDetailService.updateOrderDetail(id,updatedOrderDetail);
            return new ResponseEntity<>("updated", HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderDetail(@PathVariable("id") int id) {
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
                orderDetailDTO.setOrdersId(orderDetails.getOrders().getId());
                orderDetailDTO.setProductsName(orderDetails.getProducts().getProductName());
                orderDetailDTO.setSize(orderDetails.getSize());
                orderDetailDTO.setQuantity(orderDetails.getQuantity());
                orderDetailDTO.setUnitPrice(orderDetails.getUnitPrice());
                return orderDetailDTO;
            }
        });
        return new ResponseEntity<>(orderDetailDTOS, HttpStatus.OK);
    }
}