package com.qaforum.www.qaforum.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qaforum.www.qaforum.model.Report;

@Repository
public interface ReportRepository extends JpaRepository <Report,Long> {

	Optional<Report> findById(Long reportId);
}
