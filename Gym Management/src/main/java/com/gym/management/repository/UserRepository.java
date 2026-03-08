package com.gym.management.repository;
import com.gym.management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Integer> {


}
