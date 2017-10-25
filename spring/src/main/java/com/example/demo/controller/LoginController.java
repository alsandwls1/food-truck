package com.example.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Login;
import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/members")
public class LoginController {

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/login")
	public Object postMemberLogin(@RequestBody Login login, HttpSession session) {
		System.out.println("1 : "+login);
		loginService.authenticate(login);
		
		Member member = new Member();
		
		if(login.getMError() == null) {
			member = memberRepository.findOneByEmail(login.getMEmail());
			System.out.println("loginController # member : " + member);
			session.setAttribute("member", member);
			return member;
		}
		System.out.println("loginController # login : " + login);
		return login;
	}
	
	

	@GetMapping("/logout")
	public void getLogout(HttpSession session) {
		session.removeAttribute("member");
	}

}