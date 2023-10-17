package com.vti.service;

import com.vti.entity.Categories;
import com.vti.form.CategoriesFormForCreatingOrUpdating;
import com.vti.repository.ICategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriesService implements ICategoriesService {

    @Autowired
    private ICategoriesRepository categoriesRepository;


    @Override
    public List<Categories> getAllCategories(){
        return categoriesRepository.findAll();
    }

    @Override
    public Categories getCategoriesById(int id) {
        return categoriesRepository.getById(id);
    }

    @Override
    public void createCategories(CategoriesFormForCreatingOrUpdating form) {
        Categories categories = new Categories();
        categories.setName(form.getName());
        categoriesRepository.save(categories);
    }

    @Override
    public void updateCategories(int id, CategoriesFormForCreatingOrUpdating form) {
        Categories categories = new Categories();
        categories.setName(form.getName());
        categoriesRepository.save(categories);
    }

    @Override
    public void deleteCategories(int id) {
        categoriesRepository.deleteById(id);
    }


}


