import { Injectable } from "@angular/core";

@Injectable()
export class Operations{
    Addition(a:any,b:any){
        var c=Number(a)+Number(b);
        return c;
    }
    subtraction(a:any,b:any){
        var c=Number(a)-Number(b);
        return c;
    }
    multiplication(a:any,b:any){
        var c=Number(a)*Number(b);
        return c;
    }
    division(a:any,b:any){
        var c=Number(a)/Number(b);
        return c;
    }
}
export class Adddetails{
  
    student:any=[];
    AddStudents(p:any){
      this.student.push(p);
    }
}