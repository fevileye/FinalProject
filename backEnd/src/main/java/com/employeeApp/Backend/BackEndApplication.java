package com.employeeApp.Backend;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Autowired
	private EmployeeRepository repository;
	
	@Bean
	public CommandLineRunner printAll(ApplicationContext ctx){
		List<Employee> tempEmployeeList=new ArrayList<Employee>();
		return args->{
			tempEmployeeList.add(new Employee("Nixon","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Budi","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Santi","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Astri","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Asun","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Maya","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Bayu","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Bagus","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("John","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Johnathan","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Stephen","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			tempEmployeeList.add(new Employee("Ardi","Christian","Male",new Date(),"Single","085252363636","Java BootCamp","Contract","-",new Date(),"SE-PG","CDC- AsterX","nixon.christian@gmail.com","bandung","Indonesian"));
			repository.save(tempEmployeeList);
		};
	}
}
