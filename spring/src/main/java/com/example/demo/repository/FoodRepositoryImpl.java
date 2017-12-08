package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Food;

@Repository
public class FoodRepositoryImpl implements FoodRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private RowMapper<Food> rowMapper = new RowMapper<Food>() {
		@Override
		public Food mapRow(ResultSet rs, int arg1) throws SQLException {
			Food f = new Food();
			
			f.setFId(rs.getInt("f_id"));
			f.setFName(rs.getString("f_name"));
			f.setFPrice(rs.getString("f_price"));
			f.setFDescription(rs.getString("f_description"));
			f.setFImage(rs.getString("f_image"));
			f.setFTruck(rs.getInt("f_truck"));
			
			return f;
		}
	};
	
	@Override
	public int insert(String name, String price, String description, String unique, MultipartFile file, int truck) {
		String sql = "insert into food (f_name,f_price,f_description,f_image, f_truck) values(?,?,?,?,?)";

		return jdbcTemplate.update(sql, name, price, description, unique + file.getOriginalFilename(), truck);
	}

	@Override
	public int update(int id, String name, String price, String description, String unique, MultipartFile file) {
		String sql = "update food set f_name=?, f_price=?, f_description=?, f_image=? where f_id=?";
		return jdbcTemplate.update(sql, name, price, description, unique + file.getOriginalFilename(), id);
	}

	@Override
	public int updateExcludeImg(int id, String name, String price, String description) {
		String sql = "update food set f_name=?, f_price=?, f_description=? where f_id=?";
		return jdbcTemplate.update(sql, name, price, description, id);
	}

	@Override
	public int delete(int fId) {
		String sql = "delete from food where f_id = ?";
		return jdbcTemplate.update(sql, fId);
	}

	@Override
	public List<Food> findAllByTruck(int fTruck) {
		String sql = "select * from food where f_truck=?";
		return jdbcTemplate.query(sql, rowMapper, fTruck);
	}

//	@Override
//	public Food findOneById(int fId) {
//		return null;
//	}
	
}
