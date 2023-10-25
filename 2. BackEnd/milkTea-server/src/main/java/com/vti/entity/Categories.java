package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name ="Categories", catalog = "milk_tea_oder")
public class Categories implements Serializable {
    @NotNull
    @Column(name = "category_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @NotNull
    @Column(name = "category_name", length = 250, nullable = false)
    private String name;

    @OneToMany(mappedBy = "categories", fetch = FetchType.EAGER)
    private List<Products> products;

}
