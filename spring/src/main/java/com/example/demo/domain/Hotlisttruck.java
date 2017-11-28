package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Hotlisttruck {
	
	private int hId;
	
	private int tId;
	private String tName;
	private String tImage;
	private double tAvg;
	private String tComment;
	private String tOpen;
	private String tClose;
	private double tLat;
	private double tLng;
	private String tAddress;
	private String tFoodmaterial;
	private String tMember;
	
	private String hError;
	
	public Hotlisttruck(String hError) {
		this.hError = hError;
	}

}
