package com.vti.form;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Parent;

import java.time.LocalDate;

@Data
@Getter
@Setter
@NoArgsConstructor
public class OrderFilterForm {
    @JsonFormat(pattern="yyyy-MM-dd")
    private String maxOrderDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    private String minOrderDate;

}
