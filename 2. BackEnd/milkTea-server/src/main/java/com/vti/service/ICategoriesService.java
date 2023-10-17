package com.vti.service;

import com.vti.entity.Categories;
import com.vti.form.CategoriesFormForCreatingOrUpdating;

import java.util.List;

public interface ICategoriesService {

    List<Categories> getAllCategories();

    Categories getCategoriesById(int id);

    void createCategories(CategoriesFormForCreatingOrUpdating form);

    void updateCategories(int id, CategoriesFormForCreatingOrUpdating form);


    void deleteCategories(int id);
}
