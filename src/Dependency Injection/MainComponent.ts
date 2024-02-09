import { Component } from "@angular/core";
import { Operations } from "./MainService";
import { student } from "src/AddStudent/studentModel";
import { Adddetails } from "./MainService";

@Component({
    selector:'app-root',
    templateUrl:'Main.html'
})
export class mainClass{
    num1:any="";
    num2:any="";

    addResult:any="";
    subResult:any="";
    mulResult:any="";
    divResult:any="";

    rno:any="";
    name:any="";
    english:any="";
    math:any="";
    science:any="";
    total:any="";
    percentage:any="";
    result:any="";
    
    s=new student("","","","","","","","");
    student:any=[];


    constructor(private op:Operations,sp:Adddetails ){}
    Calculate(a:any,b:any){

        this .addResult="Addition = "+this.op.Addition(a,b);
        this .subResult="subtraction = "+this.op.subtraction(a,b);
        this .mulResult="multiplication = "+this.op.multiplication(a,b);
        this .divResult="division = "+this.op.division(a,b);
    }
    
    AddStudent(p:any){
       this.student.sp.AddStudents(p);
       console.log(p);
       alert("student added successfully");
    }
}