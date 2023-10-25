package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.vti.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductReviewsDTO {
    private int id;
    private List<AccountDTO> account;
    private List<ProductDTO> product;
    private int ratting;
    private String reviewText;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date reviewDate;


    @Data
    @NoArgsConstructor
    static class AccountDTO {
        private int id;
        private String userName;
        private String email;
        private String phone;
        private Account.Role role;
    }

    @Data
    @NoArgsConstructor
    static class ProductDTO {
        private int id;
        private String productName;
        private String description;
        private Double priceM;
        private Double priceL;
        private String imageUrl;
    }
}
