package com.qaforum.www.qaforum.payload;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.qaforum.www.qaforum.model.Question;

public class AnswerRequest {
	
	@NotBlank
    @Size(max = 400)
	private String content;
	


	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	

}
