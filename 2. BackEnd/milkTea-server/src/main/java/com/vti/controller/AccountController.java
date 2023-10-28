package com.vti.controller;


import com.vti.dto.AccountDTO;
import com.vti.entity.Account;
import com.vti.form.AccountFromForCreatingOrUpdating;
import com.vti.service.IAccountService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/Account")
@CrossOrigin("*")
public class AccountController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private ModelMapper mapper;


    @GetMapping
    public ResponseEntity<?> getAllUsers () {
        List<Account> entities = accountService.getAllUsers();
        List<AccountDTO> dtos = mapper.map(entities, new TypeToken<List<AccountDTO>>() {}.getType());
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createUserRegister ( @RequestBody AccountFromForCreatingOrUpdating form ) {
        accountService.createAccountRegister(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.CREATED);
    }
}

