package com.vti.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.vti.dto.ProductsDto;
import com.vti.entity.Products;
import com.vti.form.CategoriesFormForCreatingOrUpdating;
import com.vti.form.ProductsFormForCreatingOrUpdating;
import com.vti.service.IProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@RestController
@RequestMapping(value = "/api/v1/products")
@CrossOrigin("*")
public class ProductsController {

    @Autowired
    private IProductsService productsService;

    @GetMapping()
    public ResponseEntity<?> getAllProducts(Pageable pageable, @RequestParam(required = false) String search) {
        Page<Products> entities  = productsService.getAllProducts(pageable, search);

        Page<ProductsDto> dtoPage  = entities.map(new Function<Products, ProductsDto>(){
            @Override
            public ProductsDto apply(Products products) {
                ProductsDto dto = new ProductsDto(
                        products.getId(),
                        products.getProductName(),
                        products.getDescription(),
                        products.getPriceM(),
                        products.getPriceL(),
                        products.getImageUrl(),
                        products.getCategories().getName().toString(),
                        products.getCreateDate());
                return dto;
            }
        });

        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getProductsById(@PathVariable(name = "id") int id) {
        Products products = productsService.getProductsById(id);
        ProductsDto productsDto = new ProductsDto(
                products.getId(),
                products.getProductName(),
                products.getDescription(),
                products.getPriceM(),
                products.getPriceL(),
                products.getImageUrl(),
                products.getCategories().getName().toString(),
                products.getCreateDate());

        return new ResponseEntity<ProductsDto>(productsDto, HttpStatus.OK);
    }


    @PostMapping()
    public ResponseEntity<?> createNewProducts(@RequestBody ProductsFormForCreatingOrUpdating form) {
        productsService.createNewProducts(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.CREATED);
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateProducts(@PathVariable(name = "id") int id,
                                              @RequestBody ProductsFormForCreatingOrUpdating form) {
        productsService.updateProducts(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }


    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProducts(@PathVariable(name = "id") int id) {
        productsService.deleteProducts(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

}