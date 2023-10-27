package com.vti.service;

import com.vti.entity.Categories;
import com.vti.form.CategoriesFormForCreatingOrUpdating;
import com.vti.repository.ICategoriesRepository;
import com.vti.specification.CategoriesSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class CategoriesService implements ICategoriesService {

    @Autowired
    private ICategoriesRepository categoriesRepository;


    @Override
    public Page<Categories> getAllCategories(Pageable pageable, String search){
        Specification<Categories> where = null;
        if (!StringUtils.isEmpty(search)) {
            CategoriesSpecification nameSpecification = new CategoriesSpecification("name", "EQUAL", search);
            where = Specification.where(nameSpecification);
        }

        return categoriesRepository.findAll(where, pageable);
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


