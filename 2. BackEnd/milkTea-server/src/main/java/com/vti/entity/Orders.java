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
@Table(name = "Orders", catalog = "milk_tea_oder")
public class Orders implements Serializable {
    @NotNull
    @Column(name = "order_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @Column(name = "order_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date orderDate;

    @OneToMany(mappedBy = "orders")
    private List<OrderDetails> orderDetails;

    @OneToMany(mappedBy = "orders")
    private List<Payments> payments;

    public Orders ( Account account, Date orderDate ) {
        this.account = account;
        this.orderDate = orderDate;
    }
}
