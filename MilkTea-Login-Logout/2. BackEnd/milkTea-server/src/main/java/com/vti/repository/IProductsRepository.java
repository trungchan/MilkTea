package com.vti.repository;

import com.vti.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IProductsRepository extends JpaRepository<Products, Integer>, JpaSpecificationExecutor<Products> {

}
