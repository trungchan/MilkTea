package com.vti.service;

import com.vti.entity.Categories;
import com.vti.form.CategoriesFormForCreatingOrUpdating;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import java.util.List;

public interface ICategoriesService {

    Page<Categories> getAllCategories(Pageable pageable, String search);

    Categories getCategoriesById(int id);

    void createCategories(CategoriesFormForCreatingOrUpdating form);

    void updateCategories(int id, CategoriesFormForCreatingOrUpdating form);


    void deleteCategories(int id);
}
