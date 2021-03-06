package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.domain.Hotlist;
import com.example.demo.domain.Hotlisttruck;

@Mapper
public interface HotlistRepository {
	@Insert("insert into hotlist(h_member, h_truck) values(#{hMember}, #{hTruck})")
	public int insert(Hotlist hotlist);

	@Delete("delete from hotlist where h_id=#{hId}")
	public int delete(int hId);

	// 중복체크할때 필요
	@Select("select * from hotlist where h_member = #{hMember}")
	public List<Hotlist> findAll(String hMember);

	// 앵귤러에서 http://localhost:8080/image/ 를 붙여야함
	@Select("select h.h_id, truck.* from (select * from hotlist where hotlist.h_member=#{hMember})as h inner join truck on h.h_truck = truck.t_id")
	public List<Hotlisttruck> findAllByMember(String hMember);

	@Select("select * from hotlist where h_member=#{hMember} && h_truck=#{tId}")
	public Hotlist findAllByMember2(@Param("hMember") String hMember, @Param("tId") int tId);

	//min
	@Select("select count(*) from hotlist where h_member=#{hMember} && h_truck=#{tId}")
	public int findAllByMember3(@Param("hMember") String hMember, @Param("tId") int tId);

}