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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ProductReviews", catalog = "milk_tea_oder")
public class ProductReviews implements Serializable {
    @NotNull
    @Column(name = "review_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Products products;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @NotNull
    @Column(name = "rating")
    private int rating;

    @NotNull
    @Column(name = "review_text", length = 800)
    private String reviewText;

    @Column(name = "review_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date reviewDate;

    public ProductReviews ( Products products, Account account, int rating, String reviewText, Date reviewDate ) {
        this.products = products;
        this.account = account;
        this.rating = rating;
        this.reviewText = reviewText;
        this.reviewDate = reviewDate;
    }
}
