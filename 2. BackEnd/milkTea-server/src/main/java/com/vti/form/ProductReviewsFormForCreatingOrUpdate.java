package com.vti.form;

import com.vti.entity.Account;
import com.vti.entity.ProductReviews;
import com.vti.entity.Products;
import lombok.*;

import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductReviewsFormForCreatingOrUpdate {


    private int id;

    private int accountId;

    private int productsId;
    private int ratting;

    private String reviewText;

    private Date reviewDate;


    public ProductReviews toProductReviews( Products products, Account account, int ratting, String reviewText, Date reviewDate){
        ProductReviews productReviews = new ProductReviews(products,account, ratting, reviewText, reviewDate);
        productReviews.setId(id);
        return productReviews;

    }


}
