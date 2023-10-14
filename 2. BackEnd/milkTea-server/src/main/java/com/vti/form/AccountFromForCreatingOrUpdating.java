package com.vti.form;


import com.vti.entity.Account;
import com.vti.entity.ProductReviews;
import com.vti.entity.Products;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountFromForCreatingOrUpdating {
    private int id;
    private String email;
    private String userName;
    private String phone;
    private String password;
    private Account.Role role;
    public Account toAccount(){
        Account account = new Account(email, userName, phone, password);
        account.setId(id);
        return account;
    }
}
