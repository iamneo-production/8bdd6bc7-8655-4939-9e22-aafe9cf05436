package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserCourseEntity;
import com.example.demo.Service.UserCourseSeviceInterface;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserCourseController {

	 @Autowired
	  private UserCourseSeviceInterface userCourseServiceInterface;
	
	 
	  
	  @PostMapping("/enrolled_students_details")
	  public ResponseEntity<UserCourseEntity> addUserCourseEntity(@RequestBody UserCourseEntity userCourseEntity){
		  UserCourseEntity userCourseEntitysaved = userCourseServiceInterface.addUserCourseEntity(userCourseEntity);
	      return new ResponseEntity<UserCourseEntity>(userCourseEntitysaved,HttpStatus.CREATED);
	  }
	  
	  
	  @GetMapping("/all_enrolled_students_details")
	  public ResponseEntity<List<UserCourseEntity>> getAllUserCourseEntity(){
	  
		  List<UserCourseEntity>listOfAllUsers=  userCourseServiceInterface.getAllUserCourseEntity();
	    return new ResponseEntity <List<UserCourseEntity>> (listOfAllUsers,HttpStatus.OK);
	  }
	
}
