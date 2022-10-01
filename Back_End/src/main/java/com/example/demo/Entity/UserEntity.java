package com.example.demo.Entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User_details")
public class UserEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int Id;
	
	@Column(name="user_role")
	private String userRole;
	
	@Column(name="email")
	private String email;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="mobile_number")
	private String mobileNumber;
	
	@Column(name="Password")
	private String password ;
//	 
//	@Column(name="confirm_password")
//	private Integer confirmPassword;
//	
	
	public UserEntity(int id,String userRole,String email,String UserName,String MobileNumber,String Password){
		
			this.Id=id;
			this.userRole=userRole;
			this.email=email;
			this.userName=UserName;
			this.mobileNumber=MobileNumber;
			this.password=Password;
			
	}
	
public UserEntity() { }
	
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}
	
	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String user_role) {
		this.userRole = user_role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String Password) {
		this.password = Password;
	}


	
}
