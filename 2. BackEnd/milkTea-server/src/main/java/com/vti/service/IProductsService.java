package com.vti.service;

import com.vti.entity.Products;
import com.vti.form.ProductsFormForCreatingOrUpdating;

import java.util.List;

public interface IProductsService {

    List<Products> getAllProducts();

    Products getProductsById(int id);

    void createNewProducts(ProductsFormForCreatingOrUpdating form);

    void deleteProducts(int id);

    void updateProducts(int id, ProductsFormForCreatingOrUpdating form);
}
