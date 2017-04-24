package com.employeeApp.Backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	
	@Autowired 
	private EmployeeRepository EmpRepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping ("/employee")
	public Iterable<Employee> displayEmployee(){
		return EmpRepo.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping ("/employee/{id}")
	public Employee employeeBasedOnId(@PathVariable long id){
		
		return EmpRepo.findByEmpid(id);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("employee/{id}")
	public Long deleteEmployeeBasedOnId(@PathVariable long id){
		return EmpRepo.deleteByEmpid(id);
	}
	
}
