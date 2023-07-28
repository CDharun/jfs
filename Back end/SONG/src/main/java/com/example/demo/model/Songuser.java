package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Songuser {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long id;
private String uname;
private String email;
private String password;
private Long phnno;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getUname() {
	return uname;
}
public void setUname(String uname) {
	this.uname = uname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Long getPhnno() {
	return phnno;
}
public void setPhnno(Long phnno) {
	this.phnno = phnno;
}
public Songuser() {
	super();
	// TODO Auto-generated constructor stub
}
public Songuser(Long id, String uname, String email, String password, Long phnno) {
	super();
	this.id = id;
	this.uname = uname;
	this.email = email;
	this.password = password;
	this.phnno = phnno;
}

}

