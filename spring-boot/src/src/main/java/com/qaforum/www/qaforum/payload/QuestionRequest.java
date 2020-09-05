package com.qaforum.www.qaforum.payload;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class QuestionRequest {
	
	@NotBlank
    @Size(max = 60)
	private String title;
	
	@NotBlank
    @Size(max = 300)
	private String description;
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


}
