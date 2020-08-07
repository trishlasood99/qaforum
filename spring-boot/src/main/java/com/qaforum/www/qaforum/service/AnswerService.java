package com.qaforum.www.qaforum.service;

import java.util.ArrayList;
import java.util.List;

import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import com.qaforum.www.qaforum.exceptions.BadRequestException;
import com.qaforum.www.qaforum.exceptions.ResourceNotFoundException;
import com.qaforum.www.qaforum.model.Answer;
import com.qaforum.www.qaforum.model.Question;
import com.qaforum.www.qaforum.model.Upvote;
import com.qaforum.www.qaforum.model.User;
import com.qaforum.www.qaforum.payload.AnswerRequest;
import com.qaforum.www.qaforum.payload.AnswerResponse;
import com.qaforum.www.qaforum.payload.UpvoteRequest;
import com.qaforum.www.qaforum.repository.AnswerRepository;
import com.qaforum.www.qaforum.repository.QuestionRepository;
import com.qaforum.www.qaforum.repository.UpvoteRepository;
import com.qaforum.www.qaforum.repository.UserRepository;
import com.qaforum.www.qaforum.security.UserPrincipal;

@Service
public class AnswerService {
	@Autowired
    private AnswerRepository answerRepository;

	@Autowired
    private QuestionRepository questionRepository;
	
    @Autowired
    private UpvoteRepository upvoteRepository;

    @Autowired
    private UserRepository userRepository;
    
    private static final Logger logger = LoggerFactory.getLogger(AnswerService.class);

    public List<AnswerResponse> getAllAnswers(UserPrincipal currentUser, long questionId)
    {
    	List<Answer>answers = answerRepository.findByQuestionId(questionId);
        List<Long> answerIds = answers.stream().map(Answer::getId).collect(Collectors.toList());
        List<Long> upvotes = new ArrayList<Long>();
        List<Long> hasUpvoted= new ArrayList<Long>();
        for(Long id:answerIds)
        {
        	upvotes.add(upvoteRepository.countByAnswerId(id));
        	hasUpvoted.add(upvoteRepository.countByUserIdAndAnswerId(currentUser.getId(), id));
        }
        List<AnswerResponse> ansResponses = new ArrayList<AnswerResponse>();
        for(int i=0;i<answers.size();i++)
        {
        	AnswerResponse ansObj = new AnswerResponse();
        	ansObj.setId(answers.get(i).getId());
        	ansObj.setContent(answers.get(i).getContent());
        	ansObj.setQuestion(answers.get(i).getQuestion());
        	ansObj.setUpvotes(upvotes.get(i));
        	ansObj.setUserUpvoted(hasUpvoted.get(i)==1);
        	ansResponses.add(ansObj);
        }        
    	return ansResponses;
    }
	
    public Answer createAnswer(AnswerRequest ansReq, long questionId)
    {
    	Answer ans = new Answer();
    	Question ques = questionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question", "id", questionId));
    	
    	ans.setQuestion(ques);
    	ans.setContent(ansReq.getContent());
    	
    	return answerRepository.save(ans);
    }
    
    public AnswerResponse castVoteAndGetUpdatedAnswer(Long answerId, UpvoteRequest voteRequest, UserPrincipal currentUser) {
        Answer ans = answerRepository.findById(answerId)
                .orElseThrow(() -> new ResourceNotFoundException("Answer", "id", answerId));

        User user = userRepository.getOne(currentUser.getId());

        Upvote vote = new Upvote();
        vote.setAnswer(ans);
        vote.setUser(user);
        

        try {
            vote = upvoteRepository.save(vote);
        } catch (DataIntegrityViolationException ex) {
            logger.info("User {} has already voted in Answer {}", currentUser.getId(), answerId);
            throw new BadRequestException("Sorry! You have already cast your vote in this answer");
        }

        //-- Vote Saved, Return the updated Answer Response now --

       
        long upvotes = upvoteRepository.countByAnswerId(answerId);
        AnswerResponse ansObj =  new AnswerResponse();
        ansObj.setContent(ans.getContent());
        ansObj.setId(ans.getId());
        ansObj.setQuestion(ans.getQuestion());
        ansObj.setUpvotes(upvotes);
        ansObj.setUserUpvoted(true);
        
        return ansObj;
    }
    
    public AnswerResponse removeUpvote(Long answerId, UserPrincipal currentUser)
    {
    	Answer ans = answerRepository.findById(answerId)
                .orElseThrow(() -> new ResourceNotFoundException("Answer", "id", answerId));

        User user = userRepository.getOne(currentUser.getId());
        
        Upvote vote = upvoteRepository.findByUserIdAndAnswerId(user.getId(),answerId)
                .orElseThrow(() -> new ResourceNotFoundException("Answer and user", "id", answerId));
        try 
        {
           	upvoteRepository.delete(vote);
       	} 
        catch (	IllegalArgumentException ex) {
            logger.info("User {} never voted in Answer {}", currentUser.getId(), answerId);
            throw new BadRequestException("Sorry! You never cast your vote in this answer");
        }
        
        long upvotes = upvoteRepository.countByAnswerId(answerId);
        AnswerResponse ansObj =  new AnswerResponse();
        ansObj.setContent(ans.getContent());
        ansObj.setId(ans.getId());
        ansObj.setQuestion(ans.getQuestion());
        ansObj.setUpvotes(upvotes);
        ansObj.setUserUpvoted(true);
        
        return ansObj;
        
    }


}
