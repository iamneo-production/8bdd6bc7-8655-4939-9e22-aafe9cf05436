package com.example.demo.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity,Integer>{

	

	 Boolean existsByEmail(String email);

//	static UserEntity findByEmailAndPassword(String email, String password) {
//		// TODO Auto-generated method stub
//		return null;
//	}


	Boolean existsByEmailAndPassword(String email, String password);

	UserEntity findByEmail(String email);

	
}
