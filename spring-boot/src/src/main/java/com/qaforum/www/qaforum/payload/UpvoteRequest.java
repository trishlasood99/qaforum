package com.qaforum.www.qaforum.payload;

import javax.validation.constraints.NotNull;

public class UpvoteRequest {
	
	@NotNull
	private long answerId;

	public long getAnswerId() {
		return answerId;
	}

	public void setAnswerId(long answerId) {
		this.answerId = answerId;
	}
	
	

}
