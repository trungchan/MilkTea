package com.vti.controller;

import com.vti.dto.PaymentDTO;
import com.vti.entity.Payments;
import com.vti.form.PaymentFormForCreatingOrUpdating;
import com.vti.service.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.function.Function;

@RestController
@RequestMapping("api/v1/Payments")
@CrossOrigin("*")
public class PaymentController {
    private IPaymentService paymentService;

    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentFormForCreatingOrUpdating paymentForm) {
        Payments createdPayment = paymentService.createPayment(paymentForm);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable("id") int id) {
        Payments payment = paymentService.getPaymentById(id);
        if (payment != null) {
            return new ResponseEntity<>(payment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update an existing payment
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePayment(@PathVariable("id") int id, @RequestBody PaymentFormForCreatingOrUpdating paymentUpdatingForm) {
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
    public ResponseEntity<?> deletePayment(@PathVariable("id") int id) {
        boolean deleted = paymentService.deletePayment(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Retrieve all payments
    @GetMapping
    public ResponseEntity<?> getAllPayments(Pageable pageable, @RequestParam(required = false) String search) {
        Page<Payments> paymentsPage = paymentService.getAllPayments(pageable, search);
        Page<PaymentDTO> paymentDTOS = paymentsPage.map(new Function<Payments, PaymentDTO>() {
            @Override
            public PaymentDTO apply(Payments payments) {
                PaymentDTO paymentDTO = new PaymentDTO();

                paymentDTO.setId(payments.getId());
                paymentDTO.setOrders(payments.getOrders().toString());
                paymentDTO.setTotalPayment(payments.getTotalPayment().toString());
                paymentDTO.setPaymentDate(payments.getPaymentDate().toString());
                paymentDTO.setName(payments.getName());
                paymentDTO.setEmail(payments.getEmail());
                paymentDTO.setPhone(payments.getPhone());
                paymentDTO.setAddress(payments.getAddress());
                paymentDTO.setBankNumber(payments.getBankNumber());
                paymentDTO.setTypePay(payments.getTypePay().toString());
                return paymentDTO;
            }
        });
        return new ResponseEntity<>(paymentDTOS, HttpStatus.OK);
    }
}
