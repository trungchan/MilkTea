package com.vti.service;

import com.vti.entity.ProductReviews;
import com.vti.form.ProductReviewsFilterForm;
import com.vti.form.ProductReviewsFormForCreatingOrUpdate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductReviewsService {
    Page<ProductReviews> getAllProductReviews( Pageable pageable, ProductReviewsFilterForm form );

    ProductReviews getProductReviewsById ( int id );

    ProductReviews createOrUpdateReview ( ProductReviewsFormForCreatingOrUpdate form );

    void deleteProductReviews ( int id );
    int deleteManyReviews( List<Integer> idDeleteList);
}
