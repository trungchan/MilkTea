package com.vti.specification;

import com.vti.entity.*;
import com.vti.form.OrderFilterForm;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

public class OrdersSpectification {
    public static Specification<Orders> buildWhere ( OrderFilterForm form ) {
        if (form == null) {
            return null;
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate min = Objects.nonNull(form.getMinOrderDate()) ? LocalDate.parse(form.getMinOrderDate(), formatter): null;
        LocalDate max = Objects.nonNull(form.getMaxOrderDate()) ? LocalDate.parse(form.getMaxOrderDate(), formatter): null;
        return
                hasOrderDateGreaterThanOrEqualTo(min).
                        and(hasOrderDateLessThanOrEqualTo(max));
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