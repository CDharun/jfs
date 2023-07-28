package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService {
		@Autowired
		private FeedbackRepository repo;
		
		public Feedback addFeedback(Feedback feedback) {
			return repo.save(feedback);
		}
		public List<Feedback> viewFeedback() {
			return repo.findAll();
		}
		public String deleteFeedback(Long id) {
			repo.deleteById(id);
			return "deleted";
		}
		public int feedbackCount() {
			return repo.getFeedbackCount();
		}
}