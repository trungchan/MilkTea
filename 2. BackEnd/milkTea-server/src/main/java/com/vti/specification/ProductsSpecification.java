package com.vti.specification;

import com.vti.entity.Products;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ProductsSpecification implements Specification<Products> {
    private String field;
    private String operator;
    private Object value;

    public ProductsSpecification(String field, String operator, Object value) {
        this.field = field;
        this.operator = operator;
        this.value = value;

    }

    @Override
    public Predicate toPredicate(Root<Products> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        if (operator.equalsIgnoreCase("LIKE")) {

            if (field.equalsIgnoreCase("products.name")) {
                return builder.like(root.get("products").get("name"), "%" + value.toString() + "%");
            } else {
                return builder.like(root.get(field), "%" + value.toString() + "%");
            }
        }
        return null;
    }

}

