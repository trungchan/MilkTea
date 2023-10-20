package com.vti.service;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;

import java.util.List;

public interface IPaymentService {
    Payments createPayment(Payments payment);

    Payments getPaymentById(Long id);

    Payments createPayment(PaymentFormForCreatingOrUpdating paymentForm);

    boolean deletePayment(Long id);




    List<Payments> getAllPayments();

    Payments updatePayment(PaymentFormForCreatingOrUpdating paymentUpdatingForm);
}
