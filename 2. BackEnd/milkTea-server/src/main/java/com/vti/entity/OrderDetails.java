package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Entity
@Table(name = "OrderDetails", catalog = "milk_tea_oder")
public class OrderDetails implements Serializable {
    @NotNull
    @Column(name = "order_details_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Orders orders;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products products;


    @Column(name = "quantity", columnDefinition = "1")
    private int quantity;

    @Column(name = "size")
    @Enumerated(EnumType.STRING)
    private Size size;

    @Column(name = "unit_price")
    private Double unitPrice;

    public enum Size {
        M, L
    }

    public OrderDetails(Orders orders, Products products, int quantity, Size size
    ) {
        this.orders = orders;
        this.products = products;
        this.quantity = quantity;
        this.size = size;
        this.unitPrice = calculateTotalPrice(products);
    }

    public double calculateTotalPrice(Products products) {
        double totalPrice;
        Double priceM = products.getPriceM();
        Double priceL = products.getPriceL();
        double priceMValue = (priceM != null) ? priceM.doubleValue() : 0.0;
        double priceLValue = (priceL != null) ? priceL.doubleValue() : 0.0;
        if (size == Size.M) {
            totalPrice = getQuantity() * priceMValue;
            return Math.round(totalPrice);
        } else if (size == Size.L) {
            totalPrice = getQuantity() * priceLValue;
            return Math.round(totalPrice);
        }
        return 0.0;
    }
}
