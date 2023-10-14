package com.vti.service;


import com.vti.dto.LoginDTO;
import com.vti.entity.Account;
import com.vti.form.AccountFromForCreatingOrUpdating;
import com.vti.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService implements IAccountService
//        , UserDetailsService
{
    @Autowired
    private IAccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public List<Account> getAllUsers () {
        return accountRepository.findAll();
    }

    @Override
    public LoginDTO findByUserName ( String userName ) {
        Optional<Account> optional = accountRepository.findByUserName(userName);
        if (optional.isPresent()){
            Account account = optional.get();
            LoginDTO loginDTO = new LoginDTO();
            loginDTO.setId(account.getId());
            loginDTO.setUserName(userName);
            loginDTO.setRole(account.getRole());
            return loginDTO;
        }
        return null;
    }

    @Override
    public Account UpdateAccountRegister ( AccountFromForCreatingOrUpdating form ) {
        return accountRepository.save(form.toAccount());
    }


    @Override
    public Account getAccountById ( int id ) {
        return accountRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteAccount ( int id ) {
        accountRepository.deleteById(id);

    }

    @Override
    public Account createAccountRegister ( AccountFromForCreatingOrUpdating form ) {
        Account account = form.toAccount();
        account.setPassWord(passwordEncoder.encode(form.getPassword()));
        return accountRepository.save(account);
    }

    @Override
    public UserDetails loadUserByUsername ( String username ) throws UsernameNotFoundException {
        return null;
    }

//    @Override
//    public UserDetails loadUserByUsername ( String userName ) throws UsernameNotFoundException {
//        Optional<Account> optional = accountRepository.findByUserName(userName);
//
//        if (optional == null) {
//            throw new UsernameNotFoundException("User not found with username: " + userName);
//        }
//        Account account = optional.get();
//            List<GrantedAuthority> authorities = new ArrayList<>();
//           authorities.add(account.getRole());
//        return new org.springframework.security.core.userdetails.User(account.getUserName(),account.getPassWord(),AuthorityUtils.createAuthorityList(account.getRole().toString()));
////        if (optional.isPresent()){
////            User user = optional.get();
////            List<GrantedAuthority> authorities = new ArrayList<>();
////            authorities.add(user.getRole());
////            return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),authorities);
////        }else {
////            throw new UsernameNotFoundException(userName);
////        }
//    }


}
