package com.qaforum.www.qaforum.repository;

import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.qaforum.www.qaforum.exceptions.ResourceNotFoundException;
import com.qaforum.www.qaforum.model.Answer;
import com.qaforum.www.qaforum.model.Upvote;
import com.qaforum.www.qaforum.model.User;

public interface UpvoteRepository extends JpaRepository < Upvote,Long>{
	
	@Query("SELECT COUNT(v.id) from Upvote v where v.answer.id = :answerId")
	Long countByAnswerId(@Param("answerId") Long answerId);
	
	@Query("SELECT COUNT(v.id) FROM Upvote v where v.user.id = :userId and v.answer.id = :answerId")
    Long countByUserIdAndAnswerId(@Param("userId") Long userId, @Param("answerId") Long answerId);

	@Query("SELECT * FROM Upvote v where v.user.id = :userId and v.answer.id = :answerId")
	Optional<Upvote> findByUserIdAndAnswerId(@Param("userId") Long userId, @Param("answerId") Long answerId);
}
