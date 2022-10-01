package com.example.demo.Repositary;


//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.UserCourseEntity;
import com.example.demo.Entity.UserEntity;

@Repository
public interface UserCourseRepo extends JpaRepository<UserCourseEntity,Integer> {

	
	public UserCourseEntity save(UserCourseEntity userCourseEntity);

//	public List<UserCourseEntity> getAll();

}
