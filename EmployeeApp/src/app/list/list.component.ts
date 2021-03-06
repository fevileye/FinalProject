import { Component, OnInit } from '@angular/core';
import {employeesListServices} from 'app/employeeslist.services';
import {MdDialog} from '@angular/material';
import {PopupComponent} from 'app/popup/popup.component';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {sharedServices} from 'app/shared.services';

@Component({
  selector: 'emp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private EmployeesListServices:employeesListServices,
  private router:Router,
  public dialog:MdDialog,
  private http:Http,
  private SharedServices:sharedServices) { }

  originalData;
  employees;
  buttonStatus=null;
  deleteStatus=null;
  tempDeleteData;
  selectedId;
  sortingStatus="normal";

  ngOnInit() {
      this.EmployeesListServices.getHttp().subscribe(employees=>{
      this.employees=employees;
      this.originalData=employees});

      this.SharedServices.notifyStream$.subscribe(response=>{
        if (response.hasOwnProperty('option') && response.option=='cancelClicked'){
          this.selectedId=null;
          this.buttonStatus=null;
        }
      });
  }

  sortingOperation(){

    if (this.sortingStatus==="normal"){
          this.employees.sort(function(name1,name2){
          if (name1.firstName<name2.firstName){
            return -1;
          } else if (name1.firstName > name2.firstName){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="Ascending"
    }
    else if (this.sortingStatus==="Ascending"){
          this.employees.sort(function(name1,name2){
          if (name1.firstName>name2.firstName){
            return -1;
          } else if (name1.firstName < name2.firstName){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="normal"
    }
  }

  onClicked(employee){
    this.buttonStatus=1;
    this.tempDeleteData=employee;
  }

  onChange(event)
  {
    this.employees=this.originalData.filter(employee=>employee.lastName.toLowerCase().includes(event.target.value));
  }

  onColorClicked(employeeId){
    this.selectedId=employeeId;
  }

  onAddClicked(){
    this.buttonStatus=null;
    this.selectedId=null;
    this.router.navigate(['add']);
  }

  onDeleteClicked(){
    this.deleteStatus=1;
  }

  onConfrimationNo(){
    this.deleteStatus=null;
  }

  onConfrimationYes(){
    this.deleteStatus=null;
    this.EmployeesListServices.delete(this.tempDeleteData.empid)
      .subscribe(()=>{
        this.EmployeesListServices.getHttp().subscribe(employees=>{
        this.employees=employees;
        this.originalData=employees;
        this.buttonStatus=null;
      });
    });
  }
}
