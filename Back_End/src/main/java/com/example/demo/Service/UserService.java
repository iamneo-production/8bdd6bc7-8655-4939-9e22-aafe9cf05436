package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repositary.UserRepo;

@Service
public class UserService  implements UserServiceInterface{

	@Autowired
	private UserRepo userRepo;

	@Override
	public UserEntity addUserEntity(UserEntity userEntity) {
		UserEntity savedUserEntity=userRepo.save(userEntity);
		return savedUserEntity;
	}

	
	@Override
	public List<UserEntity> getAllUserEntity() {
		return userRepo.findAll();
	}
	
	@Override
	public List<UserEntity> isUserEntityPresent() {
		return userRepo.findAll();
	}


//	@Override
//	public String isUserPresent(String email) {
//		return UserRepo. findByEmailAndPassword(email);
//	}
	@Override
	public Boolean existsByemail(String email) {
		return userRepo.existsByEmail(email);
	}



	@Override
	public Boolean isUserPresent(String email, String password) {
		// TODO Auto-generated method stub
		return userRepo.existsByEmailAndPassword(email,password);
	}


	

	@Override
	public UserEntity getByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepo.findByEmail(email);
	}




}
