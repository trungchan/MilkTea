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
    @Autowired
    private IPaymentService paymentService;

    // Retrieve all payments
    @GetMapping
    public ResponseEntity<?> getAllPayments(Pageable pageable, @RequestParam(required = false) String search) {
        Page<Payments> paymentsPage = paymentService.getAllPayments(pageable, search);
        Page<PaymentDTO> paymentDTOS = paymentsPage.map(new Function<Payments, PaymentDTO>() {
            @Override
            public PaymentDTO apply(Payments payments) {
                PaymentDTO paymentDTO = new PaymentDTO();
                paymentDTO.setId(payments.getId());
                paymentDTO.setOrdersId(payments.getOrders().getId());
                paymentDTO.setName(payments.getName());
                paymentDTO.setEmail(payments.getEmail());
                paymentDTO.setPhone(payments.getPhone());
                paymentDTO.setAddress(payments.getAddress());
                paymentDTO.setBankNumber(payments.getBankNumber());
                paymentDTO.setTypePay(payments.getTypePay());
                return paymentDTO;
            }
        });
        return new ResponseEntity<>(paymentDTOS, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable("id") int id) {
        try {
            Payments payments = paymentService.getPaymentById(id);
            // chuyển đổi dữ liệu
            PaymentDTO paymentDTO = new PaymentDTO();
            paymentDTO.setId(payments.getId());
            paymentDTO.setName(payments.getName());
            paymentDTO.setOrdersId(payments.getOrders().getId());
            paymentDTO.setEmail(payments.getEmail());
            paymentDTO.setPhone(payments.getPhone());
            paymentDTO.setAddress(payments.getAddress());
            paymentDTO.setBankNumber(payments.getBankNumber());
            paymentDTO.setTypePay(payments.getTypePay());
            return new ResponseEntity<>(paymentDTO, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentFormForCreatingOrUpdating paymentForm) {
        try {
            paymentService.createPayment(paymentForm);
            return new ResponseEntity<>("CREATED", HttpStatus.CREATED);

        } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>("Can't Create New Payment", HttpStatus.BAD_REQUEST);
        }
    }

    // Update an existing payment
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePayment(@PathVariable("id") int id, @RequestBody PaymentFormForCreatingOrUpdating paymentUpdatingForm) {
      try {
          paymentService.updatePayment(id, paymentUpdatingForm);
			return new ResponseEntity<>("updated", HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);

	}


    // Delete a payment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePayment(@PathVariable("id") int id) {
        boolean deleted = paymentService.deletePayment(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
        }
    }


}
