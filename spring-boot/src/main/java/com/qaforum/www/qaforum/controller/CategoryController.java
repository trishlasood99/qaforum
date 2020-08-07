package com.qaforum.www.qaforum.controller;

import java.util.List;
import java.util.Optional;

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
import com.qaforum.www.qaforum.payload.CategoryRequest;
import com.qaforum.www.qaforum.repository.CategoryRepository;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
	
	@GetMapping("/categories/{categoryId}")
	public Category getCategory(@PathVariable Long categoryId)
	{
        return categoryRepository.findById(categoryId).map(category -> {
            	
            return category;
        }).orElseThrow(() -> new ResourceNotFoundException("Category","categoryId",categoryId));
	}
	
	 @PostMapping("/categories")
	 public Category createCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
		  Category category = new Category();
		  category.setName(categoryRequest.getName());
		  category.setDescription(categoryRequest.getDescription());
	      return categoryRepository.save(category);
	 }
	
	 @PutMapping("/categories/{categoryId}")
	    public Category updateCategory(@PathVariable Long categoryId, @Valid @RequestBody Category categoryRequest) {
	        return categoryRepository.findById(categoryId).map(category -> {
	            category.setName(categoryRequest.getName());
	            category.setDescription(categoryRequest.getDescription());	
	            return categoryRepository.save(category);
	        }).orElseThrow(() -> new ResourceNotFoundException("Category","categoryId",categoryId));
	  }
	 @DeleteMapping("/categories/{categoryId}")
	    public ResponseEntity<?> deleteCategory(@PathVariable Long categoryId) {
	        return categoryRepository.findById(categoryId).map(post -> {
	            categoryRepository.delete(post);
	            return ResponseEntity.ok().build();
	        }).orElseThrow(() -> new ResourceNotFoundException("Category","categoryId",categoryId));
	    }
	 
}
