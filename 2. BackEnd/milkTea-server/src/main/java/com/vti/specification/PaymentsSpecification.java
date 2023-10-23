package com.vti.specification;

import com.vti.entity.Payments;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class PaymentsSpecification implements Specification<Payments> {
    private static final long serialVersionUID = 1L;

    private String field;
    private String operator;
    private Object value;

    public PaymentsSpecification(String field, String operator, Object value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    @Override
    public Predicate toPredicate(Root<Payments> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        // TODO Auto-generated method stub
        if (operator == "LIKE") {
            if (field == "name") {
                return criteriaBuilder.like(root.get("name"), "%" + value.toString() + "%");
            } else if (field == "email") {
                return criteriaBuilder.like(root.get("email").get("name"), "%" + value.toString() + "%");
            } else if (field == "phone") {
                return criteriaBuilder.like(root.get("phone"), "%" + value.toString() + "%");
            } else if (field == "address") {
                return criteriaBuilder.like(root.get("address"), "%" + value.toString() + "%");

            }
        };
        return null;
    }
}
