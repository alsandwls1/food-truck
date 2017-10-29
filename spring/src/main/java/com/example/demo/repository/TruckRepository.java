package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.Truck;

@Mapper
public interface TruckRepository {
	public int insert(Truck truck);

	public int update(Truck truck);
	
	// 트럭의 위치만 업데이트
	 public int updateLocal(Truck truck);

	public int delete(int tId);

	public List<Truck> findAll();

	public Truck findOneById(int tId);

	public List<Truck> findAllByAddr(String tAddress);

	// 회원 아이티로 트럭찾기
	public Truck findOneByMember(String tMember);

	// 트럭의 평균값을 찾음
	public int findAvgByTruck(int tId);

	// 트럭의 평균 평점을 업데이트
	public int updateAvg(int tId);


}
