package com.qaforum.www.qaforum.payload;

public class QuestionResponse {
	
	private long id;
	private String title;
	private String description;
	private CategoryResponse category;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
	public CategoryResponse getCategory() {
		return category;
	}
	public void setCategory(CategoryResponse category) {
		this.category = category;
	}
	
	
	
}
