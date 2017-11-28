package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Hotlist;
import com.example.demo.domain.Hotlisttruck;
import com.example.demo.domain.Review;
import com.example.demo.repository.HotlistRepository;
import com.example.demo.service.HotlistService;

@RestController
@RequestMapping("/hotlist")
public class HotlistController {
	@Autowired
	private HotlistRepository hotlistRepository;
	@Autowired
	private HotlistService checkService;

	@PostMapping("/post")
	public Hotlist add(@RequestBody Hotlist hotlist) {
		// 중복체크
		Hotlist resultHotlist = checkService.checkDuplicate(hotlist);
		// System.out.println("Controller # hotlist="+resultHotlist);

		if (resultHotlist.getHError() == null) {
			hotlistRepository.insert(resultHotlist);
			return resultHotlist;
		} else {
			return resultHotlist;
		}
	}

	@DeleteMapping("/{hId}")
	public String remove(@PathVariable int hId) {
		int num = hotlistRepository.delete(hId);
		// System.out.println("num="+num);
		if (num == 1) {
			return "success";
		} else {
			return "fail";
		}
	}

	// 나의 즐겨찾기 조회
	@GetMapping("/{hMember:.+}")
	public List<Hotlisttruck> getAllByMember(@PathVariable String hMember) {
		List<Hotlisttruck> hotlist = hotlistRepository.findAllByMember(hMember);
		System.out.println(hotlist.isEmpty());
		if(hotlist.isEmpty()) {
			//error 메세지 추가해서 넘김
			Hotlisttruck h = new Hotlisttruck("등록된 즐겨찾기가 없습니다.");
			hotlist.add(h);
			return hotlist;
		} else {
			return hotlist;
		}
	}

	@GetMapping("/check/{tId}/{hMember:.+}")
	public Hotlist getAllByMember2(@PathVariable String hMember, @PathVariable int tId) {
		System.out.println("getAllByMember2 # member="+hMember);
		System.out.println("getAllByMember2 # tid="+tId);
		 System.out.println("즐찾::::"+hotlistRepository.findAllByMember2(hMember, tId));
		return hotlistRepository.findAllByMember2(hMember, tId);
	}

}
