package com.example.demo.repository;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Food;

//@Mapper
public interface FoodRepository {

	public int insert(String name, String price, String description, String unique, MultipartFile file, int truck);

	public int update(int id, String name, String price, String description, String unique, MultipartFile file);
	
	public int updateExcludeImg(int id, String name, String price, String description);

	public int delete(int fId);

	// 해당하는 트럭의 모든 메뉴들 출력
	public List<Food> findAllByTruck(int fTruck);

	// 푸드 하나의 상세내용보기
	// public Food findOneById(int fId);
}
