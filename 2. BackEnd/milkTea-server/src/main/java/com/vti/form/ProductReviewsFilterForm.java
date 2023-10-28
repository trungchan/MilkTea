package com.vti.form;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.bytebuddy.asm.Advice;

import java.time.LocalDate;

@Data
@Getter
@Setter
@NoArgsConstructor
public class ProductReviewsFilterForm {
    private String search;
    private Integer maxRating;
    private Integer minRating;
    private LocalDate maxReviewDate;
    private LocalDate minReviewDate;

}
