package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor

public class ProductsDto {
    private int id;
    private String name;
    private String description;
    private Double priceM;
    private Double priceL;
    private String imageUrl;
    private String categories;


    @JsonFormat(pattern="yyyy-MM-dd")
    private Date createDate;


}
