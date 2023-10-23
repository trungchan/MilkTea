package com.vti.service;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
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
