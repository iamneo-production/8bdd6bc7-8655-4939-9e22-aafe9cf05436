package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Student_details")
public class UserCourseEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int Id;
	
//Student details
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="father_name")
	private String fatherName;
	
	@Column(name="mother_name")
	private String motherName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="age")
	private int age;
	
	@Column(name="mobile_number")
	private String mobileNumber;
	
	@Column(name="alternate_mobileNumber")
	private String alternateMobileNumber;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="adress")
	private String adress;

	public UserCourseEntity(int id,String firstName, String lastName,String motherName,String fatherName,String email,
			int age,String MobileNumber,String alternateMobileNumber, String gender, String adress){
		
			this.Id=id;
			this.firstName=firstName;
			this.lastName=lastName;
			this.fatherName=fatherName;
			this.motherName=motherName;
			this.email=email;
			this.age=age;
			this.mobileNumber=MobileNumber;
			this. alternateMobileNumber=alternateMobileNumber;
			this.gender=gender;
			this.adress=adress;
	}
	public UserCourseEntity() {}
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAlternateMobileNumber() {
		return alternateMobileNumber;
	}

	public void setAlternateMobileNumber(String alternateMobileNumber) {
		this.alternateMobileNumber = alternateMobileNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getadress() {
		return adress;
	}

	public void setadress(String adress) {
		this.adress = adress;
	}
	
}
