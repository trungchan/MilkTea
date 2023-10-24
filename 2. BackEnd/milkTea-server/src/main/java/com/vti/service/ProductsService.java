package com.vti.service;


import com.vti.entity.Categories;
import com.vti.repository.ICategoriesRepository;
import com.vti.specification.ProductsSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.vti.entity.Products;
import com.vti.form.ProductsFormForCreatingOrUpdating;
import com.vti.repository.IProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class ProductsService implements IProductsService {

    @Autowired
    private IProductsRepository productsRepository;

    @Autowired
    private ICategoriesRepository categoriesRepository;

    @Override
    public Page<Products> getAllProducts(Pageable pageable, String search) {
        Specification<Products> where = null;

        if (!StringUtils.isEmpty(search)) {
            ProductsSpecification nameSpecification = new ProductsSpecification("productName", "LIKE", search);
            where = Specification.where(nameSpecification);
        }
        return productsRepository.findAll(where, pageable);
    }

    @Override
    public Products getProductsById(int id) {
        return productsRepository.getById(id);
    }

    @Override
    public void createNewProducts(ProductsFormForCreatingOrUpdating form) {
        Categories categories = categoriesRepository.findById(form.getCategoryId()).get();
        Products products = new Products();
        products.setProductName(form.getName());
        products.setDescription(form.getDescription());
        products.setPriceM(form.getPriceM());
        products.setPriceL(form.getPriceL());
        products.setImageUrl(form.getImageUrl());
        products.setCategories(categories);
        productsRepository.save(products);
    }

    @Override
    public void updateProducts(int id, ProductsFormForCreatingOrUpdating form) {
        Categories categories = categoriesRepository.findById(form.getCategoryId()).orElse(null);
        Products products = productsRepository.findById(id).orElse(null);
        if (products != null && categories != null) {
            products.setProductName(form.getName());
            products.setDescription(form.getDescription());
            products.setPriceM(form.getPriceM());
            products.setPriceL(form.getPriceL());
            products.setCategories(categories);
            products.setImageUrl(form.getImageUrl());
        }
        productsRepository.save(products);
    }


    @Override
    public void deleteProducts(int id) {
        productsRepository.deleteById(id);
    }


}
