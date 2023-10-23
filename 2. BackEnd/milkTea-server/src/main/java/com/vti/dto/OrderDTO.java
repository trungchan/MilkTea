package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Account;
import com.vti.entity.Orders;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private int id;
    private String accountId;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date orderDate;

    @Data
    @NoArgsConstructor
    static class AccountDTO {
        private int id;
        private String userName;
        private String email;
        private String phone;
        private Account.Role role;
    }
}
