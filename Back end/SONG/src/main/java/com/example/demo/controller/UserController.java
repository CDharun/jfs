package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Songuser;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000",allowedHeaders="*")
public class UserController {
@Autowired
UserRepo repo;
@Autowired
UserService service;
@GetMapping("/get")
public List <Songuser> getALL(){
	
	return repo.findAll();
}
@PostMapping("/post")
public Songuser createUser(@RequestBody Songuser stu) {
	return repo.save(stu);
}

}
