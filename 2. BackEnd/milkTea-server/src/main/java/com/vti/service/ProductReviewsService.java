package com.vti.service;

import com.vti.entity.Account;
import com.vti.entity.ProductReviews;
import com.vti.entity.Products;
import com.vti.form.ProductReviewsFilterForm;
import com.vti.form.ProductReviewsFormForCreatingOrUpdate;
import com.vti.repository.IProductReviewsRepository;
import com.vti.specification.ProductReviewsSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class ProductReviewsService implements IProductReviewsService {
    @Autowired
    private IProductReviewsRepository reviewsRepository;


    @Override
    public Page<ProductReviews> getAllProductReviews ( Pageable pageable, ProductReviewsFilterForm form ) {
        return reviewsRepository.findAll(ProductReviewsSpecification.buildWhere(form),pageable);
    }

    @Override
    public ProductReviews getProductReviesById ( int id ) {
        return reviewsRepository.findById(id).orElse(null);
    }

    @Override
    public ProductReviews createOrUpdateReview ( ProductReviewsFormForCreatingOrUpdate form ) {
//        Account account
//        Products product

        return reviewsRepository.save(form.toProductReviews());
    }

    @Override
    public void deleteProductReviews ( int id ) {
        reviewsRepository.deleteById(id);
    }

    @Override
    public int deleteManyReviews ( List<Integer> idDeleteList ) {
        return reviewsRepository.deleteManyReviews(idDeleteList);
    }
}
