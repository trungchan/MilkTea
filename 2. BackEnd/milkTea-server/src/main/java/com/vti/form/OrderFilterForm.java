package com.vti.form;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
@NoArgsConstructor
public class OrderFilterForm {
    private String Search;
    private double maxUnitPrice;
    private double minUnitPrice;
    private LocalDate maxOrderDate;
    private LocalDate minOrderDate;
    private String filterSize;
    private String filterOrderStatus;
    private String filterTypePay;


}
