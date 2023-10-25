package com.vti.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class CategoriesDto {
    private int id;
    private String name;
    private List<ProductsDto> productsDto;

}
