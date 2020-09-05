package com.qaforum.www.qaforum.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class AppException extends RuntimeException{

	public AppException(String message, Throwable cause) {
		super(message, cause);
	
	}

	public AppException(String message) {
		super(message);
		
	}
	
}
