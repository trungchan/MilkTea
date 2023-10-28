package com.vti.service;

import com.vti.dto.LoginDTO;
import com.vti.entity.Account;
import com.vti.form.AccountFromForCreatingOrUpdating;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IAccountService extends UserDetailsService
{
    List<Account> getAllUsers();
    LoginDTO findByUserName( String userName);

    Account UpdateAccountRegister( AccountFromForCreatingOrUpdating form);
    Account getAccountById ( int id );

    void deleteAccount ( int id );

    Account createAccountRegister ( AccountFromForCreatingOrUpdating form );

//    UserDetails loadUserByUsername ( String userName ) throws UsernameNotFoundException;
}
