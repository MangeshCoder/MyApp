import { Component } from "@angular/core";
import { student } from "./studentModel";
@Component({
    selector:'app-root',
    templateUrl:'studentTask.html'
})
export class studentClass{

    s=new student("","","","","","","","");
    student:any=[];
    index:any=-1;
    
    Calculate(p:any){
        this.s.total=Number(p.english)+Number(p.maths)+Number(p.science);
        this.s.percentage=(this.s.total/3).toFixed(2);
        if(this.s.percentage >= 40){
            this.s.result="pass";
        }else{
            this.s.result="fail";
        }
    }
    Addstudent(p:any){
       this.student.push(p);
       this.ClearData();
    }
    ClearData(){
       this.s=new student("","","","","","","","");
      // this.btnstatus="false";
       this.index=-1;
    }
    viewStudent(p:any,i:any){
        this.index=i;
        //this.btnstatus="true";
        this.s=new student(p.rno,p.name,p.english,p.maths,p.science,p.total,p.percentage,p.result);
    }
    Updatestudent(p:any){
        this.student[this.index]=p;
        this.ClearData();
    }
    deleteStudent(i:any){
        this.student.splice(i,1);
        alert("student deleted successfully !");
    }
}