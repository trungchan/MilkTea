package com.vti.service;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPaymentService {

    Payments getPaymentById(int id);

    Payments createPayment(PaymentFormForCreatingOrUpdating paymentForm);

    boolean deletePayment(int id);

    Page<Payments> getAllPayments(Pageable pageable, String search);



    Payments updatePayment(int id, PaymentFormForCreatingOrUpdating paymentUpdatingForm);
}
