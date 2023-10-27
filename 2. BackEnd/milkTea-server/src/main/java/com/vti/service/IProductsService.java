package com.vti.service;

import com.vti.entity.Products;
import com.vti.form.ProductsFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductsService {

    Page<Products> getAllProducts(Pageable pageable, String search);

    Products getProductsById(int id);

    void createNewProducts(ProductsFormForCreatingOrUpdating form);

    void deleteProducts(int id);

    void updateProducts(int id, ProductsFormForCreatingOrUpdating form);
}
