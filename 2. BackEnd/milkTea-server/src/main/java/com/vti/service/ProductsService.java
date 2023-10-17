package com.vti.service;

import com.vti.entity.Categories;
import com.vti.entity.Products;
import com.vti.form.ProductsFormForCreatingOrUpdating;
import com.vti.repository.IProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService implements IProductsService{

    @Autowired
    private IProductsRepository productsRepository;

    @Override
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @Override
    public Products getProductsById(int id) {
        return productsRepository.getById(id);
    }

    @Override
    public void createNewProducts(ProductsFormForCreatingOrUpdating form) {
        Products products = new Products();
        products.setProductName(form.getName());
        products.setDescription(form.getDescription());
        products.setPriceM(form.getPriceM());
        products.setPriceL(form.getPriceL());
//        products.setCategories(form.getCategories().toString());
        productsRepository.save(products);
    }

    @Override
    public void updateProducts(int id, ProductsFormForCreatingOrUpdating form) {
        Products products = new Products();
        products.setProductName(form.getName());
        products.setDescription(form.getDescription());
        products.setPriceM(form.getPriceM());
        products.setPriceL(form.getPriceL());
//        products.setCategories(form.getCategories().toString());
        productsRepository.save(products);
    }


    @Override
    public void deleteProducts(int id) {
        productsRepository.deleteById(id);
    }



}
