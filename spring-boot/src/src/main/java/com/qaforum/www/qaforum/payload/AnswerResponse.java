package com.qaforum.www.qaforum.payload;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.qaforum.www.qaforum.model.Question;


public class AnswerResponse {
	
	private long id;
	private String content;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Question question;
	private long upvotes;
	private boolean userUpvoted;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public long getUpvotes() {
		return upvotes;
	}
	public void setUpvotes(long upvotes) {
		this.upvotes = upvotes;
	}
	
	public boolean isUserUpvoted() {
		return userUpvoted;
	}
	public void setUserUpvoted(boolean userUpvoted) {
		this.userUpvoted = userUpvoted;
	}
	
}
