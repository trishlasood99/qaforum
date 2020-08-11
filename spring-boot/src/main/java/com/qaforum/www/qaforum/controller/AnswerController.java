package com.qaforum.www.qaforum.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.qaforum.www.qaforum.model.Answer;
import com.qaforum.www.qaforum.payload.AnswerRequest;
import com.qaforum.www.qaforum.payload.AnswerResponse;
import com.qaforum.www.qaforum.payload.ApiResponse;
import com.qaforum.www.qaforum.payload.UpvoteRequest;
import com.qaforum.www.qaforum.repository.AnswerRepository;
import com.qaforum.www.qaforum.repository.UpvoteRepository;
import com.qaforum.www.qaforum.repository.UserRepository;
import com.qaforum.www.qaforum.security.CurrentUser;
import com.qaforum.www.qaforum.security.UserPrincipal;
import com.qaforum.www.qaforum.service.AnswerService;

@RestController

public class AnswerController {

    @Autowired
    private AnswerService answerService;

    private static final Logger logger = LoggerFactory.getLogger(AnswerController.class);
    
    @GetMapping("/categories/{categoryId}/questions/{questionId}/answers")
    @PreAuthorize("hasRole('USER')")
    public List<AnswerResponse> getAnswers(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "questionId") Long questionId,  @PathVariable (value = "categoryId") Long categoryId)
    {
    	return answerService.getAllAnswers(currentUser,questionId,categoryId);
    }
    
    @PostMapping("/categories/{categoryId}/questions/{questionId}/answers")
    public ResponseEntity<?> createAns(@Valid @RequestBody AnswerRequest answerRequest, @PathVariable (value = "questionId") Long questionId,  @PathVariable (value = "categoryId") Long categoryId) {
        Answer ans = answerService.createAnswer(answerRequest,questionId,categoryId);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{questionId}")
                .buildAndExpand(ans.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Answer Created Successfully"));
    }
    
 
    @PostMapping("/categories/{categoryId}/questions/{questionId}/answers/{answerId}/upvote")
    @PreAuthorize("hasRole('USER')")
    public AnswerResponse castVote(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "answerId") Long answerId,@PathVariable (value = "questionId") Long questionId,  @PathVariable (value = "categoryId") Long categoryId, @Valid @RequestBody UpvoteRequest voteRequest) {
    	return answerService.castVoteAndGetUpdatedAnswer(answerId,questionId,categoryId, voteRequest, currentUser);
    }
    
    @DeleteMapping("/categories/{categoryId}/questions/{questionId}/answers/{answerId}/upvote")
    @PreAuthorize("hasRole('USER')")
    public AnswerResponse deleteVote(@CurrentUser UserPrincipal currentUser, @PathVariable (value = "answerId") Long answerId,@PathVariable (value = "questionId") Long questionId,  @PathVariable (value = "categoryId") Long categoryId) {
    	return answerService.removeUpvote(answerId, questionId, categoryId, currentUser);
    }
    
}
