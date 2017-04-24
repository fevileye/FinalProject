import {Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {employeesListServices} from 'app/employeeslist.services';
import {Validators,FormBuilder} from '@angular/forms';
import {sharedServices} from 'app/shared.services';

@Component({
  selector: 'emp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formStatus=null;
  employee=null;
  form;
  genders=[
    {value:'male',viewValue:'Male'},
    {value:'female',viewValue:'Female'},
  ]
  constructor(
    private formBuilder:FormBuilder,
    private EmployeesListServices: employeesListServices,
  private activatedRoute:ActivatedRoute,
  private router:Router,
  private SharedServices:sharedServices
 ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params=>{
      let employeeId=params['id'];
      if(employeeId){
      this.EmployeesListServices.getById(employeeId)
      .subscribe(employee=>{
        this.employee=employee;
        this.formStatus=1;
      });
      }
    });


     this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      nationality: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      martialStatus: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      phone: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      subDivision: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      suspendDate: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      
    });

  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(){
    this.router.navigate(['']);
  }

  onCancelClicked(){
    this.formStatus=null;
    this.SharedServices.notifyOtherComponent({option:'cancelClicked',value:'cancel'});
    this.router.navigate(['']);   
  }

}
