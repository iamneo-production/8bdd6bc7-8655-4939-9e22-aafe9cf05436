import axios from "axios";
const REST_API_URL ="http://localhost:8080";


class Integrating{
    
    //User
    getByEmail(email){
    return axios.get(REST_API_URL+"/checkBy/{email}"+email)
    }
    //Signup
    UserEntitysaved(user){
        return axios.post(REST_API_URL+"/save",user);
    }

    //all users details
    listOfAllUsers(user){
        return axios.get(REST_API_URL+"/getall",user);
    }
    //email  validation
    emailValidation(email){
       return axios.get(REST_API_URL+"/checkUserEmail/{email}") 
    }


//Login

    //Already emailand password exist or not
    isUserPresent(email,password){
    return axios.get(REST_API_URL+"/login/{email}/{password}"+email+password)
    }


// EnrollCourse
   
  //add student details
  userCourseEntitysaved(student_details){
    return axios.post(REST_API_URL+"/enrolled_students_details",user);
  }

  //list of  student details
  listOfAllUsers(studentDetails){
    return axios.get(REST_API_URL+"/all_enrolled_students_details",user);
  }
} 