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
public class Food {

	private int fId;
	private String fName;
	private String fPrice;
	private String fDescription;
	private String fImage;
	private int fTruck;

	private String fError;
	
	public Food(String fError) {
		this.fError = fError;
	}

}
