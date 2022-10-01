 package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.UserEntity;

public interface UserServiceInterface {

	public UserEntity addUserEntity(UserEntity userEntity);

	public List<UserEntity> getAllUserEntity();
		
	public Boolean existsByemail(String email);


	public Boolean isUserPresent(String email, String password) ;

	List<UserEntity> isUserEntityPresent();

//	public static String fingByEmail(String email) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	public UserEntity getByEmail(String email);


	

	

	
	

}
