package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductReviewsDTO {
    private int id;

    private int accountId;

    private int productsId;
    private int ratting;

    private String reviewText;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date reviewDate;
}
