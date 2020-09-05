package com.qaforum.www.qaforum.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ReportRequest {
	
	@NotBlank
	@Size(max=400)
	private String content;
	
	@NotNull
	private Long category_id;
	
	private Long question_id;
	
	private Long answer_id;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}

	public Long getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(Long question_id) {
		this.question_id = question_id;
	}

	public Long getAnswer_id() {
		return answer_id;
	}

	public void setAnswer_id(Long answer_id) {
		this.answer_id = answer_id;
	}
	
	

}
