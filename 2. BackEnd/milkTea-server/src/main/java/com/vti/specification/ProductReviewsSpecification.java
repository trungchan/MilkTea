package com.vti.specification;

import com.vti.entity.ProductReviews;
import com.vti.entity.ProductReviews_;
import com.vti.form.ProductReviewsFilterForm;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.util.Objects;

public class ProductReviewsSpecification {
    public static Specification<ProductReviews> buildWhere ( ProductReviewsFilterForm form ) {
        if (form == null) {
            return null;
        }
        Specification<ProductReviews> where = hasReviewTextlike(form.getSearch());
        if (form.getMinRating() != 0){
            where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()));
        }
        if (form.getMaxRating() != 0){
            where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()));
        }
        if (form.getMaxReviewDate() != null){
            where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()));
        }
        if (Objects.nonNull(form.getMinReviewDate())){
            where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()));
        }
        return  where;
//                and(hasRattingGreaterThanOrEqualTo(form.getMinRating())).
//                and(hasRattingLessThanOrEqualTo(form.getMaxRating()));
//                and(hasReviewDateGreaterThanOrEqualTo(form.getMinReviewDate())).
//                and(hasReviewDateLessThanOrEqualTo(form.getMaxReviewDate()));
    }

    private static Specification<ProductReviews> hasReviewTextlike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(ProductReviews_.reviewText), "%" + search.trim() + "%");
        };
    }



    private static Specification<ProductReviews> hasRattingGreaterThanOrEqualTo ( Integer minRatting ) {
        return ( root, query, builder ) -> {
            if (minRatting == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(ProductReviews_.rating),minRatting);
        };
    }

    private static Specification<ProductReviews> hasRattingLessThanOrEqualTo ( Integer maxRatting ) {
        return ( root, query, builder ) -> {
            if (maxRatting == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(ProductReviews_.rating),maxRatting);
        };
    }
    private static Specification<ProductReviews> hasReviewDateGreaterThanOrEqualTo ( LocalDate minReviewDate ) {
        return ( root, query, builder ) -> {
            if (minReviewDate == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(ProductReviews_.reviewDate).as(LocalDate.class),minReviewDate);
        };
    }

    private static Specification<ProductReviews> hasReviewDateLessThanOrEqualTo ( LocalDate maxReviewDate ) {
        return ( root, query, builder ) -> {
            if (maxReviewDate == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(ProductReviews_.reviewDate).as(LocalDate.class),maxReviewDate);
        };
    }
}
