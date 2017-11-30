package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Truck;
import com.example.demo.repository.TruckRepositoryImpl;
import com.example.demo.service.StorageService;

@RestController
//@RequestMapping("/trucks")
public class TruckController {
	@Autowired
	private TruckRepositoryImpl truckRepository;
	
	@Autowired
	private StorageService storageService;
	
	@PostMapping("/trucks/post")
	public ResponseEntity<String> handleFileUpload(
			@RequestParam("name") String name,
			@RequestParam("open") String open,
			@RequestParam("close") String close,
			@RequestParam("lat") String lat,
			@RequestParam("lng") String lng,
			@RequestParam("comment") String comment,
			@RequestParam("address") String address,
			@RequestParam("file") MultipartFile file,
			@RequestParam("email") String email
			) {
		System.out.println("푸드트럭 컨트롤러 POST");
		System.out.println(name);
		System.out.println(open);
		System.out.println(close);
		System.out.println(lat);
		System.out.println(lng);
		System.out.println(comment);
		System.out.println(address);
		System.out.println(file);
		System.out.println(email);
		
//		truckRepository.insert(name, open, close, lat, lng, file);
		try {
			System.out.println("-----------try------");
			storageService.store(name, open, close, lat, lng, comment, address, file, email);
		} catch (IOException e) {
			System.out.println("-----------catch------");
			e.printStackTrace();
		}
//		return truck;
		return null;
	}
	
	//트럭 정보수정
	@PostMapping("/trucks/post2")
	public Truck handleFileUpload2(
			@RequestParam("tid") String tid, 
			@RequestParam("name") String name,
			@RequestParam("open") String open, 
			@RequestParam("close") String close, 
			@RequestParam("lat") String lat,
			@RequestParam("lng") String lng, 
			@RequestParam("comment") String comment,
			@RequestParam("address") String address, 
			@RequestParam("file") String file,
			@RequestParam("email") String email) {
		System.out.println("푸드트럭 컨트롤러 POST");
		System.out.println(name);
		System.out.println(open);
		System.out.println(close);
		System.out.println(lat);
		System.out.println(lng);
		System.out.println(comment);
		System.out.println(address);
		System.out.println(file);
		System.out.println(email);

		// truckRepository.insert(name, open, close, lat, lng, file);
		truckRepository.update(tid, name, open, close, lat, lng, comment, address, file, email);
		return truckRepository.findOneById(Integer.parseInt(tid));
	}
	   
	//이미지 포함
   @PostMapping("/trucks/post3")
   public Truck handleFileUpload3(
         @RequestParam("tid") String tid,
         @RequestParam("name") String name,
         @RequestParam("open") String open,
         @RequestParam("close") String close,
         @RequestParam("lat") String lat,
         @RequestParam("lng") String lng,
         @RequestParam("comment") String comment,
         @RequestParam("address") String address,
         @RequestParam("file") MultipartFile file,
         @RequestParam("email") String email
         ) {
      System.out.println("푸드트럭 컨트롤러 POST");
      System.out.println(name);
      System.out.println(open);
      System.out.println(close);
      System.out.println(lat);
      System.out.println(lng);
      System.out.println(comment);
      System.out.println(address);
      System.out.println(file);
      System.out.println(email);
      
      try {
         System.out.println("-----------try------");
         storageService.truckupdate(tid ,name, open, close, lat, lng, comment, address, file, email);
      } catch (IOException e) {
         System.out.println("-----------catch------");
         e.printStackTrace();
      }
      return truckRepository.findOneById(Integer.parseInt(tid));
   }
	
	@DeleteMapping("/trucks/{tId}")
	public int remove(@PathVariable int tId) {
		System.out.println(tId+"를 삭제합니다.");
		return truckRepository.delete(tId);
	}
	
	@GetMapping("/trucks")
	public List<Truck> getAll() {
		System.out.println(truckRepository.findAll());
		 return truckRepository.findAll();
		
	}
	
	@GetMapping("/trucks/find/{key}")
	public List<Truck> getKey(@PathVariable String key) {
		System.out.println(key);
		System.out.println(truckRepository.keyfind(key));
		return truckRepository.keyfind(key);
	}
	
	@GetMapping("/trucks/{tId}")
	public Truck getTruckById(@PathVariable int tId) {
		//트럭을 찾을 때, 평균값을 산출
		truckRepository.updateAvg(tId);
		System.out.println(truckRepository.findOneById(tId));
		return truckRepository.findOneById(tId);
	}
	
	//사장tMember가 가지고 있는 트럭정보
	@GetMapping("/trucks/member/{tMember:.+}")
	public Object getTruckByMember(@PathVariable String tMember) {
//		truckRepository.findOneByMember(tMember);
		Truck t =  truckRepository.findOneByMember(tMember);
		if(t == null) {
			return "0";
		} else {
			return t;
		}
	}
	
//	@GetMapping("/search/{t_address}")
//	public List<Truck> getAllByAddress(@PathVariable String t_address) {
//		return truckRepository.findAllByAddr(t_address);
//	}
	
	

}
