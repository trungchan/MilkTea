package com.vti.service;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import com.vti.repository.IPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PaymentService implements IPaymentService{
    @Autowired
    private IPaymentRepository paymentRepository;

    @Override
    public Payments createPayment(Payments payment) {
        return null;
    }

    @Override
    public Payments getPaymentById(Long id) {

        return (Payments) paymentRepository.getById(id).orElse(null);
    }

    @Override
    public Payments createPayment(PaymentFormForCreatingOrUpdating paymentForm) {
        Payments payments = new Payments();
        payments.setName(paymentForm.getName());
        payments.setAccount(paymentForm.getAccount());
        payments.setAddress(paymentForm.getAddress());
        payments.setPhone(paymentForm.getPhone());
        payments.setEmail(paymentForm.getEmail());
        payments.setPaymentDate(paymentForm.getPaymentDate());
        payments.setBankNumber(paymentForm.getBankNumber());
        payments.setTotalPayment(paymentForm.getTotalPayment());
        return paymentRepository.save(payments);
    }


    @Override
    public boolean deletePayment(Long id) {
        if (paymentRepository.existsById(id)) {
            paymentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Payments> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Payments updatePayment(PaymentFormForCreatingOrUpdating paymentUpdatingForm) {
        Payments payments = new Payments();
        payments.setName(paymentUpdatingForm.getName());
        payments.setAccount(paymentUpdatingForm.getAccount());
        payments.setAddress(paymentUpdatingForm.getAddress());
        payments.setPhone(paymentUpdatingForm.getPhone());
        payments.setEmail(paymentUpdatingForm.getEmail());
        payments.setPaymentDate(paymentUpdatingForm.getPaymentDate());
        payments.setBankNumber(paymentUpdatingForm.getBankNumber());
        payments.setTotalPayment(paymentUpdatingForm.getTotalPayment());
        return paymentRepository.save(payments);
    }
}
