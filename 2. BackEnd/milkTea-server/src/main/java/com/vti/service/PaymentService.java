package com.vti.service;

import com.vti.entity.Orders;
import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import com.vti.repository.IOrderRepository;
import com.vti.repository.IPaymentRepository;
import com.vti.specification.PaymentsSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;


@Service
public class PaymentService implements IPaymentService {
    @Autowired
    private IPaymentRepository paymentRepository;
    @Autowired
    private IOrderRepository orderRepository;


    @Override
    public Payments getPaymentById(int id) {

        return paymentRepository.getById(id);
    }

    @Override
    public Payments createPayment(PaymentFormForCreatingOrUpdating createPaymentForm) {
        Orders orders = orderRepository.getById(createPaymentForm.getOrderId());
        Payments payments = new Payments();
        payments.setName(createPaymentForm.getName());
        payments.setOrders(orders);
        payments.setAddress(createPaymentForm.getAddress());
        payments.setPhone(createPaymentForm.getPhone());
        payments.setEmail(createPaymentForm.getEmail());
        payments.setPaymentDate(createPaymentForm.getPaymentDate());
        payments.setBankNumber(createPaymentForm.getBankNumber());
        payments.setTotalPayment(createPaymentForm.getTotalPayment());
        payments.setTypePay(createPaymentForm.getTypepay());
        return paymentRepository.save(payments);
    }

    @Override
    public boolean deletePayment(int id) {
        if (paymentRepository.existsById(id)) {
            paymentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Page<Payments> getAllPayments(Pageable pageable, String search) {
        Specification<Payments> where = null;
        if (!StringUtils.isEmpty(search)) {
            PaymentsSpecification nameSpecification = new PaymentsSpecification("name", "LIKE", search);
            PaymentsSpecification priceSpecification = new PaymentsSpecification("email", "LIKE", search);
            PaymentsSpecification infoSpecification = new PaymentsSpecification("phone", "LIKE", search);
            PaymentsSpecification categorySpecification = new PaymentsSpecification("address", "LIKE", search);

            where = Specification.where(nameSpecification).or(priceSpecification).or(infoSpecification)
                    .or(categorySpecification);
        }

        return paymentRepository.findAll(where, pageable);
    }

    @Override
    public Payments updatePayment(int id, PaymentFormForCreatingOrUpdating paymentUpdatingForm) {
        Payments payments = paymentRepository.getById(id);
        Orders orders = orderRepository.getById(paymentUpdatingForm.getOrderId());
//        Payments payments = new Payments();
        payments.setName(paymentUpdatingForm.getName());
        payments.setOrders(orders);
        payments.setAddress(paymentUpdatingForm.getAddress());
        payments.setPhone(paymentUpdatingForm.getPhone());
        payments.setEmail(paymentUpdatingForm.getEmail());
        payments.setPaymentDate(paymentUpdatingForm.getPaymentDate());
        payments.setBankNumber(paymentUpdatingForm.getBankNumber());
        payments.setTotalPayment(paymentUpdatingForm.getTotalPayment());
        payments.setTypePay(paymentUpdatingForm.getTypepay());
        Payments paymentUpdate = paymentRepository.save(payments);
        return paymentUpdate;
    }

}
