import { Component } from "@angular/core";
import { employee } from "./employeeModel";
@Component({
    selector:"app-root",
    templateUrl:'employee.html'
})
export class employeeClass{

    s=new employee("","","","");
    employees:any=[];
    index:any=-1;

    AddEmployee(p:any){
        this.employees.push(p);
        alert("employee added successfully");
        this.cleardata();
    }
    ViewEmployee(p:any,i:any){
        this.index=i;
        this.s=new employee(p.employee_id,p.employee_name,p.qualification,p.salary);
    }
    UpdateEmployee(p:any){
        this.employees[this.index]=p;
        alert("employee updated successfully");
        this.cleardata();
    }
    deleteEmployee(s:any){
        this.employees.splice(s,1);
        alert("employee deleted successfully");

    }
    cleardata(){
        this.s=new employee("","","","");      
    }

}