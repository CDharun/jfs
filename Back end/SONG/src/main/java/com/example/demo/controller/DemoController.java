package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/demo")
@CrossOrigin(origins="*")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping("/get")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Welcome Home Puppy Ma");
    }
}