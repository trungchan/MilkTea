package com.vti.controller;

import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import com.vti.service.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {
    private final IPaymentService paymentService;

    @Autowired
    public PaymentController(IPaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<Payments> createPayment(@RequestBody PaymentFormForCreatingOrUpdating paymentForm) {
        Payments createdPayment = paymentService.createPayment(paymentForm);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payments> getPaymentById(@PathVariable("id") Long id) {
        Payments payment = paymentService.getPaymentById(id);
        if (payment != null) {
            return new ResponseEntity<>(payment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // Update an existing payment
    @PutMapping("/{id}")
    public ResponseEntity<Payments> updatePayment(@PathVariable("id") Long id, @RequestBody PaymentFormForCreatingOrUpdating paymentUpdatingForm) {
        Payments payment = paymentService.getPaymentById(id);
        if (payment != null) {
            payment.setId(paymentUpdatingForm.getId()); // Set the ID of the updated payment
            Payments updated = paymentService.updatePayment(paymentUpdatingForm);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a payment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable("id") Long id) {
        boolean deleted = paymentService.deletePayment(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Retrieve all payments
    @GetMapping
    public ResponseEntity<List<Payments>> getAllPayments() {
        List<Payments> payments = paymentService.getAllPayments();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }
}
