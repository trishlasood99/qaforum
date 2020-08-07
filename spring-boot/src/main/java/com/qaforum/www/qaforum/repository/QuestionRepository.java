package com.qaforum.www.qaforum.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.qaforum.www.qaforum.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository < Question, Long> {
	@Query("SELECT * FROM Question q WHERE q.category.id = :categoryId")
	List<Question> findByCategoryId(@Param("categoryId") Long categoryId);
	
	Optional<Question> findById(Long questionId);
	
	Optional<Question> findByIdAndCategoryId(Long id, Long categoryId);

}
