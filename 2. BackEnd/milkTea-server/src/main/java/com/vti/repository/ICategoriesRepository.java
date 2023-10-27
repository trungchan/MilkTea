package com.vti.repository;

import com.vti.entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ICategoriesRepository extends JpaRepository<Categories, Integer>, JpaSpecificationExecutor<Categories> {

}
