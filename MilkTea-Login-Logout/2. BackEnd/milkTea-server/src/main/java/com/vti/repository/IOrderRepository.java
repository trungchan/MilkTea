package com.vti.repository;

import com.vti.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders,Integer>, JpaSpecificationExecutor<Orders> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Orders WHERE id IN(:ids)")
    public int deleteManyReviews(@Param("ids") List<Integer> idDeleteList);

}
