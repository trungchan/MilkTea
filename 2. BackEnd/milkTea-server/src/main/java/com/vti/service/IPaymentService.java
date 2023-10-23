package com.vti.service;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPaymentService {

    Payments getPaymentById(Long id);

    Payments createPayment(PaymentFormForCreatingOrUpdating paymentForm);

    boolean deletePayment(Long id);

    Page<Payments> getAllPayments(Pageable pageable, String search);


    Payments updatePayment(PaymentFormForCreatingOrUpdating paymentUpdatingForm);
}
