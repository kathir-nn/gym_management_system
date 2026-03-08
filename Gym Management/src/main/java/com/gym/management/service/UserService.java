package com.gym.management.service;

import com.gym.management.model.User;
import com.gym.management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repo;

    public User saveUser(User user){
        return repo.save(user);
    }

}
