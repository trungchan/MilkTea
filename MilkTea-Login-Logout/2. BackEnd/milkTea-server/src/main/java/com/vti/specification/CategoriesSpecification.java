package com.vti.specification;

import com.vti.entity.Categories;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class CategoriesSpecification implements Specification<Categories> {
    private String field;
    private String operator;
    private Object value;

    public CategoriesSpecification(String field, String operator, Object value) {
        this.field = field;
        this.operator = operator;
        this.value = value;

    }

    @Override
    public Predicate toPredicate(Root<Categories> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        if (operator.equalsIgnoreCase("LIKE")) {

            if (field.equalsIgnoreCase("categories.name")) {
                return builder.like(root.get("categories").get("name"), "%" + value.toString() + "%");
            } else {
                return builder.like(root.get(field), "%" + value.toString() + "%");
            }
        }
        if (operator.equalsIgnoreCase("EQUAL")) {

            if (field.equalsIgnoreCase("categories.name")) {
                return builder.like(root.get("categories").get("name"), value.toString());
            } else {
                return builder.like(root.get(field),  value.toString());
            }
        }
        return null;
    }

}

