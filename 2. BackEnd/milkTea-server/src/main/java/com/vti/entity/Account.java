package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Entity
@Table(name = "Account", catalog = "milk_tea_oder")
public class Account implements Serializable {
    @Column(name = "account_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Column(name = "user_name", length = 255, nullable = false, unique = true)
    private String userName;

    @NotNull
    @Column(name = "email", length = 255, nullable = false, unique = true)
    private String email;

    @Column(name = "phone_number", length = 15, unique = true)
    private String phone;

    @Column(name = "password", length = 800)
    private String passWord;

    @Column(name = "create_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date date;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "account")
    private List<Orders> orders;

    @OneToMany(mappedBy = "account")
    private List<ProductReviews> productReviews;


    public enum Role implements GrantedAuthority {
        ADMIN, USER;
        @Override
        public String getAuthority(){
            return name();
        }
    }
    public Account ( String email, String userName, String phone, String passWord ) {
        this.email = email;
        this.userName = userName;
        this.phone = phone;
        this.date = date;
        this.passWord = passWord;
        this.role = Role.USER;;
    }
}
