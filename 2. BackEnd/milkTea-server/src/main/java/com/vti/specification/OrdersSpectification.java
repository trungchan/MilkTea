package com.vti.specification;

import com.vti.entity.*;
import com.vti.form.OrderFilterForm;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;

public class OrdersSpectification {
    public static Specification<Orders> buildWhere ( OrderFilterForm form ) {
        if (form == null) {
            return null;
        }
        return
                hasOrderDateGreaterThanOrEqualTo(form.getMinOrderDate()).
                and(hasOrderDateLessThanOrEqualTo(form.getMaxOrderDate()));
    }

    private static Specification<Orders> hasOrderDateGreaterThanOrEqualTo ( LocalDate minOrderDate ) {
        return ( root, query, builder ) -> {
            if (minOrderDate == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Orders_.orderDate).as(LocalDate.class),minOrderDate);
        };
    }

    private static Specification<Orders> hasOrderDateLessThanOrEqualTo ( LocalDate maxOrderDate ) {
        return ( root, query, builder ) -> {
            if (maxOrderDate == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Orders_.orderDate).as(LocalDate.class),maxOrderDate);
        };
    }
}
