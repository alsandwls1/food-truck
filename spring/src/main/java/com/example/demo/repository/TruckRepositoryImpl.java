package com.example.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Member;
import com.example.demo.domain.Truck;

@Repository
public class TruckRepositoryImpl implements TruckRepository {
	@Autowired
	private TruckRepository truckRepository;

	@Override
	public int insert(Truck truck) {
		return truckRepository.insert(truck);
	}

	@Override
	public int update(Truck truck) {
		return truckRepository.update(truck);
	}
	
	@Override
	public int delete(String t_id) {
		return truckRepository.delete(t_id);
	}


	@Override
	public List<Truck> findAll() {
		return truckRepository.findAll();
	}

	@Override
	public Member findAllByAddr(String tAddress) {
		return truckRepository.findAllByAddr(tAddress);
	}

}
