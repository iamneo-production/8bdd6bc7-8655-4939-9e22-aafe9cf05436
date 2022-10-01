package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserServiceInterface;




@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

  @Autowired
  private UserServiceInterface userServiceInterface;
  
//Register
  
  @PostMapping("/save")
  public ResponseEntity<UserEntity> addUserEntity(@RequestBody UserEntity userEntity){
	  UserEntity userEntitysaved = (UserEntity) userServiceInterface.addUserEntity(userEntity);
      return new ResponseEntity<UserEntity>(userEntitysaved,HttpStatus.CREATED);
  }
  
  @GetMapping("/getall")
  public ResponseEntity<List<UserEntity>> getAllUserEntity(){
  
	  List<UserEntity>listOfAllUsers=  userServiceInterface.getAllUserEntity();
    return new ResponseEntity <List<UserEntity>> (listOfAllUsers,HttpStatus.OK);
  }
  
//Login  
  
  @GetMapping("/login/{email}/{password}")
  public String  isUserEntityPresent(@PathVariable String email,@PathVariable String password) {
    Boolean bool =userServiceInterface.isUserPresent(email,password);
	 if (bool)
     return "true" ;
	 else
		 return "false";
  }
  
  
  @GetMapping("/checkUserEmail/{email}")
  public String emailValidation(@PathVariable String email) {
	  Boolean bool =userServiceInterface.existsByemail(email);
	 if (bool)
      return "true" ;
	 else
		 return "false";
  }
  
  @GetMapping("/checkBy/{email}")
  public UserEntity getByEmail(@PathVariable String email){
  	return userServiceInterface.getByEmail(email);
  }
  
}