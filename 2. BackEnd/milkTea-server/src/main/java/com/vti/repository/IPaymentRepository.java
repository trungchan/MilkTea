package com.vti.repository;

import com.vti.entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IPaymentRepository extends JpaRepository<Payments, Integer> {

    boolean existsById(Long id);

    void deleteById(Long id);

    Optional<Object> getById(Long id);
}
