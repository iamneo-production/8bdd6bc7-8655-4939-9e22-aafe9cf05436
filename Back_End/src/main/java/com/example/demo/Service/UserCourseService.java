package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserCourseEntity;
import com.example.demo.Repositary.UserCourseRepo;

@Service
public class UserCourseService  implements UserCourseSeviceInterface{

	@Autowired
	private UserCourseRepo userCourseRepo;
	
	@Override
	public UserCourseEntity addUserCourseEntity(UserCourseEntity userCourseEntity) {
		UserCourseEntity savedUserCourseEntity=userCourseRepo.save(userCourseEntity);
		return savedUserCourseEntity;
	}

	
	@Override
	public List<UserCourseEntity> getAllUserCourseEntity() {
		return userCourseRepo.findAll();
	}


	@Override
	public List<UserCourseEntity> findAllUserCourseEntity() {
		// TODO Auto-generated method stub
		return userCourseRepo.findAll();
	}
	
}
