package com.vti.repository;

import com.vti.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

//Long cung cấp các phương thức để thực hiện các thao tác phổ biến trên giá trị kiểu long,
// như chuyển đổi thành chuỗi, tính toán, so sánh, v.v.
public interface TokenRepository extends JpaRepository<Token,Long> {
    Token findByToken(String token);

    List<Token> findAllByExpirationIsAfter( Date exDate );
//    Tìm kiếm và trả về danh sách các đối tượng Token mà thời gian hết hạn sau một ngày cụ thể (exDate).
//    Điều này có thể được sử dụng để xóa các token đã hết hạn.
}
