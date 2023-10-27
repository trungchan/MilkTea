package com.vti.service;

import com.vti.entity.Account;
import com.vti.entity.Orders;
import com.vti.entity.Payments;
import com.vti.form.OrderFilterForm;
import com.vti.form.OrderFormForCreatingOrUpdate;
import com.vti.repository.IAccountRepository;
import com.vti.repository.IOrderDetailRepository;
import com.vti.repository.IOrderRepository;
import com.vti.repository.IPaymentRepository;
import com.vti.specification.OrdersSpectification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Autowired
    private IPaymentRepository paymentRepository;


    @Autowired
    private IAccountRepository accountRepository;



     @Override
    public Page<Orders> getAllOrder ( Pageable pageable, OrderFilterForm form ) {
        return orderRepository.findAll(OrdersSpectification.buildWhere(form),pageable);
    }


    @Override
    public Orders getOrderById ( int id ) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public Orders createOrUpdateOrder ( OrderFormForCreatingOrUpdate form ) {
       Account account = accountRepository.findById(form.getAccountId()).get();
//        Orders orders = orderRepository.save(form.toOrder(account));// insert order
//        form.getOrderDetailForms()
        //luu order_detail(don hang do mua nhung sp nao)
//        for ls detail
//                detail.setOrder(orders)
//        orderDetailRe
//        pository.saveAll(ls)// insert order detail
        //luu paytment
//        Payments payments = new Payments();
//        payments.setAccount();
        //insertt payment

        return  orderRepository.save(form.toOrder(account));
    }

    @Override
    public void deleteOrder ( int id ) {
         orderDetailRepository.deleteByOrdersId(id);
         paymentRepository.deleteByOrdersId(id);
         orderRepository.deleteById(id);
    }

    @Override
    public int deleteManyOrder ( List<Integer> idDeleteList ) {
        return orderRepository.deleteManyReviews(idDeleteList);
    }
}
