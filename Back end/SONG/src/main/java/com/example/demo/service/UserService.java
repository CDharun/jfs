package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Songuser;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	@Autowired
 UserRepo repo;
	public Optional<Songuser> finduserbyid(int id)
	{
		return repo.findById(id);
	}
}
