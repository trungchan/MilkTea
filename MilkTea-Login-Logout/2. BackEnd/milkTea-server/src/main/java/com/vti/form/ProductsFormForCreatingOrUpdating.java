package com.vti.form;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductsFormForCreatingOrUpdating {
    private String name;
    private String description;
    private Double priceM;
    private Double priceL;
    private int categoryId;
    private String imageUrl;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createDate;

}
