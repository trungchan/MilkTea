package com.vti.controller;

import com.vti.dto.ProductReviewsDTO;
import com.vti.entity.ProductReviews;
import com.vti.form.ProductReviewsFilterForm;
import com.vti.form.ProductReviewsFormForCreatingOrUpdate;
import com.vti.repository.IProductReviewsRepository;
import com.vti.service.IProductReviewsService;
//import com.vti.specification.ProductReviewsSpecification;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/ProductReviews")
@CrossOrigin("*")
public class ProductReviewsController {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IProductReviewsService reviewsService;


    @GetMapping
    public ResponseEntity<?> getAllProductReviews ( Pageable pageable, ProductReviewsFilterForm form ) {
        Page<ProductReviews> entities = reviewsService.getAllProductReviews(pageable,form);
        List<ProductReviewsDTO> dtoList = mapper.map(entities.getContent(),new TypeToken<List<ProductReviewsDTO>>() {}.getType());
        Page<ProductReviewsDTO> dtoPage = new PageImpl<>(dtoList,pageable,entities.getTotalElements());
        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ProductReviewsDTO getProductReviesById (  @PathVariable("id") int id ) {
        ProductReviews productReviews = reviewsService.getProductReviewsById(id);
        return mapper.map(productReviews, ProductReviewsDTO.class);
    }

    @PostMapping
    public ResponseEntity<?> createProductReview (@RequestBody ProductReviewsFormForCreatingOrUpdate form ) {
        reviewsService.createOrUpdateReview(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateProductReview (@RequestBody ProductReviewsFormForCreatingOrUpdate form ) {
        reviewsService.createOrUpdateReview(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductReviews (  @PathVariable("id") int id ) {
        reviewsService.deleteProductReviews(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteManyReviews (@RequestParam(name = "idDeleteList") List<Integer> idDeleteList ) {
        return new ResponseEntity<>(reviewsService.deleteManyReviews(idDeleteList), HttpStatus.OK);
    }
}
