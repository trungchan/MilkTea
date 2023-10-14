package com.vti.repository;

import com.vti.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUserName( String userName);
//     Nếu có User tương ứng với userName, thì Optional chứa giá trị User. Nếu không có User, thì Optional sẽ không chứa gì cả (rỗng).
//     Điều này giúp bạn kiểm tra và xử lý các trường hợp trả về không tìm thấy User một cách an toàn hơn.
}
