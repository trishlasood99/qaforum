package com.qaforum.www.qaforum.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qaforum.www.qaforum.model.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
	List<Answer> findByQuestionId(Long questionId);
	Optional<Answer> findById(Long answerId);
	Optional<Answer> findByIdAndQuestionId(Long id, Long questionId);

}
