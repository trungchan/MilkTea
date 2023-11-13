package com.vti.controller;

import com.vti.dto.OrderDTO;
import com.vti.entity.Orders;
import com.vti.form.OrderFilterForm;
import com.vti.form.OrderFormForCreatingOrUpdate;
import com.vti.service.IOrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/Orders")
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IOrderService orderService;


    @GetMapping
    public ResponseEntity<?> getAllOrder ( Pageable pageable, OrderFilterForm form ) {
        Page<Orders> entities = orderService.getAllOrder(pageable,form);
        List<OrderDTO> dtoList = mapper.map(entities.getContent(),new TypeToken<List<OrderDTO>>() {}.getType());
        Page<OrderDTO> dtoPage = new PageImpl<>(dtoList,pageable,entities.getTotalElements());
        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public OrderDTO getOrderById (  @PathVariable("id") int id ) {
        Orders order = orderService.getOrderById(id);
        return mapper.map(order, OrderDTO.class);
    }

    @PostMapping
    public ResponseEntity<?> createOrder (@RequestBody OrderFormForCreatingOrUpdate form ) {
        orderService.createOrUpdateOrder(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateProductReview (@RequestBody OrderFormForCreatingOrUpdate form ) {
        orderService.createOrUpdateOrder(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder (  @PathVariable("id") int id ) {
        orderService.deleteOrder(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteManyOrder (@RequestParam(name = "idDeleteList") List<Integer> idDeleteList ) {
        return new ResponseEntity<>(orderService.deleteManyOrder(idDeleteList), HttpStatus.OK);
    }
}
