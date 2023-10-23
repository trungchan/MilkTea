package com.vti.specification;

import com.vti.entity.OrderDetails;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class OderDetailSpecification implements Specification<OrderDetails> {
    private static final long serialVersionUID = 1L;

    private String field;
    private String operator;
    private Object value;

    public OderDetailSpecification(String field, String operator, Object value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }
    public Predicate toPredicate(Root<OrderDetails> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        if (operator == "LIKE") {
            if (field == "order") {
                return criteriaBuilder.like(root.get("order"), "%" + value.toString() + "%");
            } else if (field == "products") {
                return criteriaBuilder.like(root.get("products").get("name"), "%" + value.toString() + "%");
            } else if (field == "size") {
                return criteriaBuilder.like(root.get("size"), "%" + value.toString() + "%");
            } else if (field == "quantity") {
                return criteriaBuilder.like(root.get("quantity"), "%" + value.toString() + "%");

            }
        };
        return null;
    }
}
