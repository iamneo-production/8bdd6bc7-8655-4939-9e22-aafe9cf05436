package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.UserCourseEntity;

public interface UserCourseSeviceInterface {

	public UserCourseEntity addUserCourseEntity(UserCourseEntity userCourseEntity);



	public List<UserCourseEntity> findAllUserCourseEntity();



	public List<UserCourseEntity> getAllUserCourseEntity();

	

}
