package com.vti.controller;


import com.vti.dto.CategoriesDto;
import com.vti.dto.ProductsDto;
import com.vti.entity.Categories;
import com.vti.entity.Products;
import com.vti.form.CategoriesFormForCreatingOrUpdating;
import com.vti.service.ICategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@RestController
@RequestMapping(value = "/api/v1/categories")
@CrossOrigin("*")
public class CategoriesController {

    @Autowired
    private ICategoriesService categoriesService;


    @GetMapping()
    public ResponseEntity<?> getAllCategories(Pageable pageable, @RequestParam(required = false) String search) {
        Page<Categories> entities = categoriesService.getAllCategories(pageable, search);


//        entities.get().forEach(categories -> productsDtoList.add(categories.getProducts().));
        Page<CategoriesDto> dtoPage = entities.map(new Function<Categories, CategoriesDto>() {
            @Override
            public CategoriesDto apply(Categories categories) {
                List<Products> productsList = categories.getProducts();
                List<ProductsDto> productsDtoList = new ArrayList<>();
                productsList.forEach(products -> {
                    productsDtoList.add(new ProductsDto(
                            products.getId(),
                            products.getProductName(),
                            products.getDescription(),
                            products.getPriceM(),
                            products.getPriceL(),
                            products.getImageUrl(),
                            null,
                            null,
                            products.getCreateDate()

                    ));
                });

                CategoriesDto dto = new CategoriesDto(categories.getId(), categories.getName().toString(), productsDtoList);

                return dto;
            }

        });
        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getCategoriesById(@PathVariable(name = "id") int id) {
        Categories categories = categoriesService.getCategoriesById(id);
        List<Products> productsList = categories.getProducts();
        List<ProductsDto> productsDtoList = new ArrayList<>();
        CategoriesDto categoriesDto = new CategoriesDto(categories.getId(), categories.getName(), productsDtoList);

        return new ResponseEntity<CategoriesDto>(categoriesDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createCategories(@RequestBody CategoriesFormForCreatingOrUpdating form) {
        categoriesService.createCategories(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateCategories(@PathVariable(name = "id") int id,
                                              @RequestBody CategoriesFormForCreatingOrUpdating form) {
        categoriesService.updateCategories(id, form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteCategories(@PathVariable(name = "id") int id) {
        categoriesService.deleteCategories(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

}