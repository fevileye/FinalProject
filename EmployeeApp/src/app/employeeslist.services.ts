import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class employeesListServices{
    constructor(private http:Http){}

    getHttp(){
         return this.http.get('http://localhost:8080/employee')
        .map(response=>{
            return response.json();
        });
    }

    getById(empId){
        
        return this.http.get('http://localhost:8080/employee/'+empId)
        .map(response=>{
            return response.json();
        });
    }

    add(employee){
    return this.http.post('employees',employee)
    .map(response=>{});
    }

    delete(empId){
    return this.http.delete('http://localhost:8080/employee/'+empId)
    .map(response=>{});
    }
}