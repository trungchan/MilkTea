package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductReviewsDTO {
    private int id;
    private int accountId;
    private String productsProductName;
    private int rating;
    private String reviewText;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date reviewDate;


}
