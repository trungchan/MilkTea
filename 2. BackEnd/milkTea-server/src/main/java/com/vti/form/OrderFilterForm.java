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
    private LocalDate maxOrderDate;
    private LocalDate minOrderDate;

}
