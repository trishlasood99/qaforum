package com.qaforum.www.qaforum.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qaforum.www.qaforum.exceptions.ResourceNotFoundException;
import com.qaforum.www.qaforum.model.Category;
import com.qaforum.www.qaforum.model.Question;
import com.qaforum.www.qaforum.payload.QuestionRequest;
import com.qaforum.www.qaforum.repository.CategoryRepository;
import com.qaforum.www.qaforum.repository.QuestionRepository;

@RestController
public class QuestionController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@GetMapping("/categories/{categoryId}/questions")
    public List<Question> getAllQuestionsByQuestionId(@PathVariable (value = "categoryId") Long categoryId) {
		if(!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Category","categoryId",categoryId);
        }
		return questionRepository.findByCategoryId(categoryId);		
    }
	
	@GetMapping("/categories/{categoryId}/questions/{questionId}")
	public Question getQuestion(@PathVariable(value="questionId") Long questionId,@PathVariable(value="categoryId") Long categoryId)
	{
		if(!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Category","categoryId",categoryId);
        }
				
		return questionRepository.findById(questionId).map(question -> {
            	
            return question;
        }).orElseThrow(() -> new ResourceNotFoundException("Question","questionId",questionId));
	}
	
	
	
	@PostMapping("/categories/{categoryId}/questions")
    public Question createQuestion(@PathVariable (value = "categoryId") Long categoryId,
                                 @Valid @RequestBody QuestionRequest questionRequest) {
		
		Question question = new Question();
		question.setTitle(questionRequest.getTitle());
		question.setDescription(questionRequest.getDescription());
        return categoryRepository.findById(categoryId).map(category -> {
            question.setCategory(category);
            return questionRepository.save(question);
        }).orElseThrow(() -> new ResourceNotFoundException("Category","categoryId",categoryId));
    }
	
	@PutMapping("/categories/{categoryId}/questions/{questionId}")
    public Question updateQuestion(@PathVariable (value = "categoryId") Long categoryId,
                                 @PathVariable (value = "questionId") Long questionId,
                                 @Valid @RequestBody Question questionRequest) {
        if(!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Category","categoryId",categoryId);
        }

        return questionRepository.findById(questionId).map(question -> {
            question.setTitle(questionRequest.getTitle());
            question.setDescription(questionRequest.getDescription());
            return questionRepository.save(question);
        }).orElseThrow(() -> new ResourceNotFoundException("Question","questionId",questionId));
    }
	
	@DeleteMapping("/categories/{categoryId}/questions/{questionId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable (value = "categoryId") Long categoryId,
                              @PathVariable (value = "questionId") Long questionId) {
        return questionRepository.findByIdAndCategoryId(questionId, categoryId).map(question -> {
            questionRepository.delete(question);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Question","questionId",questionId));
    }
}
