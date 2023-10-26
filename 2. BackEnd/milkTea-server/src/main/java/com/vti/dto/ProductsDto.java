package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@NonNull
public class ProductsDto {
    private int id;
    private String name;
    private String description;
    private Double priceM;
    private Double priceL;
    private String imageUrl;
    private String categories;
    private List<ProductReviewsDTO> productReviewsDTOS;



    @JsonFormat(pattern="yyyy-MM-dd")
    private Date createDate;


}