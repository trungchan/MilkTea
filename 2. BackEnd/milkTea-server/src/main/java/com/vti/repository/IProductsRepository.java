package com.vti.repository;

import com.vti.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductsRepository extends JpaRepository<Products, Integer> {

}
