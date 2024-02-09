import { Component } from "@angular/core";
import { student } from "./studentModel";

@Component({
    selector:'app-root',
    templateUrl:'student.html'
})
export class studentClass
{
    s=new student("","","","","","","","","")
    student:any=[];
    index:any=-1;

    Calculate(p:any){
        this.s.total=Number(p.english)+Number(p.math)+Number(p.science);
        this.s.percentage=(this.s.total/3).toFixed(2);
        if(this.s.percentage>=40)
        {
            this.s.result="pass";
            this.s.color="green";
        }
        else
        {
            this.s.result="fail";
            this.s.color="red";
        }
    }

    AddStudent(p:any){
        this.student.push(p);
        alert("student added successfully");
        this.ClearStudent();
    }
    UpdateStudent(p:any){
        this.student[this.index]=p
        alert("student updated successfully");
        this.ClearStudent();
    }
    ViewStudent(p:any,i:any){
        this.index=i;
        this.s=new student(p.rno,p.name,p.english,p.math,p.science,p.total,p.percentage,p.result,p.color);
    }
    DeleteStudent(i:any){
        this.student.splice(i,1);
        alert("student deleted successfully");
    }
    ClearStudent(){
        this.s=new student("","","","","","","","","");
    }
}