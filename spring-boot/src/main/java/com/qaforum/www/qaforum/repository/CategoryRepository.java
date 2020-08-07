package com.qaforum.www.qaforum.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qaforum.www.qaforum.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
	
	Optional<Category> findById(Long categoryId);
}
