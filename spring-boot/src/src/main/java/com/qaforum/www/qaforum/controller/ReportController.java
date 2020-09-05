package com.qaforum.www.qaforum.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qaforum.www.qaforum.exceptions.ResourceNotFoundException;
import com.qaforum.www.qaforum.model.Report;
import com.qaforum.www.qaforum.payload.CategoryRequest;
import com.qaforum.www.qaforum.payload.ReportRequest;
import com.qaforum.www.qaforum.repository.ReportRepository;

@RestController
public class ReportController {
	
	@Autowired
	private ReportRepository reportRepository;
	
	@GetMapping("/admin/reports")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Report> getAllReports()
	{
		return reportRepository.findAll();
	}
	
	@PostMapping("/admin/reports")
	@PreAuthorize("hasRole('USER')")
	public Report createReport(@Valid @RequestBody ReportRequest reportRequest)
	{
		Report report = new Report();
		report.setCategory_id(reportRequest.getCategory_id());
		if(reportRequest.getAnswer_id()!=null)
		{
			report.setAnswer_id(reportRequest.getAnswer_id());
		}
		if(reportRequest.getQuestion_id()!=null)
		{
			report.setQuestion_id(reportRequest.getQuestion_id());
		}
		report.setContent(reportRequest.getContent());
		return reportRepository.save(report);
	
	}
	
	@DeleteMapping("admin/reports/{reportId}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> deleteReport(@PathVariable Long reportId) {
        return reportRepository.findById(reportId).map(post -> {
            reportRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Report","reportId",reportId));
    }
	
	
}
