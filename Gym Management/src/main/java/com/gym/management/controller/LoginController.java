package com.gym.management.controller;

import com.gym.management.model.User;
import com.gym.management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gym")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user){

        return userService.saveUser(user)
                ;
    }

    @GetMapping("/welcome")
    public String welcomeMessage(){
        return "welcome to gym API";

    }

}
