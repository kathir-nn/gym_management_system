package com.gym.management.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    @GetMapping("/hello")
    public String hello(){
        return "Spring boot 4.0.2 is working \uD83D\uDE80";
    }
}
