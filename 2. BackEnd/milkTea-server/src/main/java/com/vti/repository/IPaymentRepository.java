package com.vti.repository;

import com.vti.entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface IPaymentRepository extends JpaRepository<Payments, Integer>, JpaSpecificationExecutor<Payments> {

    boolean existsById(int id);

    void deleteById(int id);
    void deleteByOrdersId(Integer id);

}
