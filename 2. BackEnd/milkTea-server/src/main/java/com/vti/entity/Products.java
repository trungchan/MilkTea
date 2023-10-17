package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Products", catalog = "milk_tea_oder")
public class Products implements Serializable {
    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int id;

    @NotNull
    @Column(name = "product_name", length = 255, nullable = false)
    private String productName;

    @NotNull
    @Column(name = "description", length = 500, nullable = false)
    private String description;

    @NotNull
    @Column(name = "price_M")
    private Double priceM;

    @NotNull
    @Column(name = "price_L")
    private Double priceL;

    @NotNull
    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @Column(name = "create_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Categories categories;

    @OneToMany(mappedBy = "products")
    private List<OrderDetails> orderDetails;

    @OneToMany(mappedBy = "products")
    private List<ProductReviews> productReviews;


}
