package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Food;
import com.example.demo.domain.Review;
import com.example.demo.repository.FoodRepository;
import com.example.demo.service.StorageService;

@RestController
@RequestMapping("/foods")
public class FoodController {
	@Autowired
	private FoodRepository foodRepository;

	@Autowired
	private StorageService storageService;
	
	//insert
	@PostMapping("/post")
	public ResponseEntity<String> add(
			@RequestParam("name") String name, 
			@RequestParam("price") String price,
			@RequestParam("description") String description, 
			@RequestParam("file") MultipartFile file,
			@RequestParam("tid") int truck) {
		System.out.println(name);
		System.out.println(price);
		System.out.println(description);
		System.out.println(file);

		try {
			storageService.foodStore(name, price, description, file, truck);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}
	
	//update -image있음
	@PostMapping("/update")
	public Object modify(
			@RequestParam("fid") int id, 
			@RequestParam("name") String name,
			@RequestParam("price") String price, 
			@RequestParam("description") String description, 
			@RequestParam("image") MultipartFile image) {
		try {
			storageService.foodStore(id, name, price, description, image);
		} catch (IOException e) {
			e.printStackTrace();
		}
		//리뷰를 수정하면 리뷰 리스트를 보여줘야하는데 이렇게 하남?				
		return "수정되었습니다.";
	}
	
	//update - image없음
	@PostMapping("/update2")
	public Object modifyExcludeImg(@RequestBody Food food) {
		foodRepository.updateExcludeImg(food.getFId(), food.getFName(), food.getFPrice(), food.getFDescription());
		return "수정되었습니다.";
	}
//	@PostMapping("/update2")
//	public Object modifyExcludeImg(
//			@RequestParam("fid") int id, 
//			@RequestParam("name") String name,
//			@RequestParam("price") String price, 
//			@RequestParam("description") String description) {
//		
//		foodRepository.updateExcludeImg(id, name, price, description);
//		return "수정되었습니다.";
//	}
	
	//delete
	@DeleteMapping("/delete/{fId}")
	public Food delete(@PathVariable int fId) {
		foodRepository.delete(fId);
		return null;
	}
	
	@GetMapping("/{fTruck}")
	public List<Food> getAllByTruck(@PathVariable int fTruck) {
		List<Food> food = foodRepository.findAllByTruck(fTruck);
		System.out.println(food.isEmpty());
		if(food.isEmpty()) {
			//error 메세지 추가해서 넘김
			Food f = new Food("등록된 메뉴가 없습니다.");
			food.add(f);
			return food;
		} else {
			return food;
		}
	}
	
	//트럭에 있는 푸드하나만 가져옴 :  추후 추가
//	@GetMapping("/view/{fTruck}/{fId}")
//	public Food getOneByTruck(@PathVariable int fTruck, @PathVariable int fId) {
//		return foodRepository.findOneById(fId);
//	}

	
}
