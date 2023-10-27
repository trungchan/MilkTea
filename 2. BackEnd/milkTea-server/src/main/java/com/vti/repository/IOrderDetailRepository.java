package com.vti.repository;

import com.vti.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IOrderDetailRepository extends JpaRepository<OrderDetails, Integer>, JpaSpecificationExecutor<OrderDetails> {
    boolean existsById(int id);

    void deleteById(int id);
    void deleteByOrdersId(Integer id);

}
