package com.vti.service;

import com.vti.entity.Account;
import com.vti.entity.ProductReviews;
import com.vti.entity.Products;
import com.vti.form.ProductReviewsFilterForm;
import com.vti.form.ProductReviewsFormForCreatingOrUpdate;
import com.vti.repository.IAccountRepository;
import com.vti.repository.IOrderDetailRepository;
import com.vti.repository.IProductReviewsRepository;
import com.vti.repository.IProductsRepository;
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

    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Autowired
    private IAccountRepository accountRepository;
    @Autowired
    private IProductsRepository productsRepository;


    @Override
    public Page<ProductReviews> getAllProductReviews ( Pageable pageable, ProductReviewsFilterForm form ) {
        return reviewsRepository.findAll(ProductReviewsSpecification.buildWhere(form),pageable);
    }



    @Override
    public ProductReviews getProductReviewsById ( int id ) {
        return reviewsRepository.findById(id).orElse(null);
    }

    @Override
    public ProductReviews createOrUpdateReview ( ProductReviewsFormForCreatingOrUpdate form ) {
    Account account = accountRepository.findById(form.getAccountId()).get();
    Products products = productsRepository.findById(form.getProductsId()).get();
        return reviewsRepository.save(form.toProductReviews(products,account));
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
