package com.vti.form;


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



    }


