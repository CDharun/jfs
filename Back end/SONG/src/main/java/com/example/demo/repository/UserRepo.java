package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Songuser;

public interface UserRepo extends JpaRepository<Songuser,Integer> {
	 
}
