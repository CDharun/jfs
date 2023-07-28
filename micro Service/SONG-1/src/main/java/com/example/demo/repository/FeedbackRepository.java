package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    @Query(value = "SELECT COUNT(*) FROM feedback", nativeQuery = true)
    int getFeedbackCount();
}