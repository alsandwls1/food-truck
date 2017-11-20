package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Application extends WebMvcConfigurerAdapter {
//	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
//            "classpath:/META-INF/resources/", "classpath:/images/",
//            "classpath:/static/", "classpath:/public/" };
//	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addRedirectViewController("/", "/members");
	}
	
//	@Override
//    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/assets/**").addResourceLocations("/assets/");
//    }

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {

			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/members/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/trucks/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/reviews/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/hotlist/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/foods/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/canival/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
				registry.addMapping("/supports/**").allowedOrigins("*").allowedMethods("POST", "GET", "PUT", "DELETE",
						"OPTIONS");
			}

		};

	}
	
}
