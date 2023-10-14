package com.vti.dto;

import com.vti.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private int id;
    private String userName;
    private Account.Role role;
    private String userAgent;
    private String token;
}
