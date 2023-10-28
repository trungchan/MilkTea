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
//        Specification<ProductReviews> where = hasRattingGreaterThanOrEqualTo(form.getMinRating());
        Specification<ProductReviews> where = hasReviewTextlike(form.getSearch());
//        if (form.getMinRating() != null){
//            where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()));
//        }
//        if (Objects.nonNull(form.getMaxRating())){
//            where.and(hasRattingLessThanOrEqualTo(form.getMaxRating()));
//        }
//        if (form.getMaxReviewDate() != null){
//            where.and(hasReviewDateGreaterThanOrEqualTo(form.getMinReviewDate()));
//        }
//        if (Objects.nonNull(form.getMinReviewDate())){
//            where.and(hasReviewDateLessThanOrEqualTo(form.getMaxReviewDate()));
//        }
        where.and(hasRattingGreaterThanOrEqualTo(form.getMinRating()))
                .and(hasRattingLessThanOrEqualTo(form.getMaxRating()));

        return  where;
//        return
//                hasReviewTextlike(form.getSearch()).
//                and(hasRattingGreaterThanOrEqualTo(form.getMinRating())).
//                and(hasRattingLessThanOrEqualTo(form.getMaxRating())).
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



    private static Specification<ProductReviews> hasRattingGreaterThanOrEqualTo ( Integer minRating ) {
        return ( root, query, builder ) -> {
            if (Objects.nonNull(minRating)) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(ProductReviews_.rating),minRating);
        };
    }

    private static Specification<ProductReviews> hasRattingLessThanOrEqualTo ( Integer maxRating ) {
        return ( root, query, builder ) -> {
            if (maxRating == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(ProductReviews_.rating),maxRating);
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
