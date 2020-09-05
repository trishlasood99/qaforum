package com.qaforum.www.qaforum.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qaforum.www.qaforum.model.Role;
import com.qaforum.www.qaforum.model.RoleName;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long>{
	
	Optional<Role> findByName(RoleName roleName);
}
