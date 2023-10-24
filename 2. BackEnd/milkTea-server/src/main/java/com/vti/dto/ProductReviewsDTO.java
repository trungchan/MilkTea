package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductReviewsDTO {
    private int id;
    private int accountId;
    private String productsName;
    private int rating;
    private String reviewText;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date reviewDate;

}
