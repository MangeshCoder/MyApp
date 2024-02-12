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
export class StudentService {
    private students: any[] = [];
    index:any=-1;
  
    addStudent(student: any) {
      this.students.push(student);
    }
    updateStudent(student: any, index: number) {
        this.students[index] = student;
      }
      deleteStudent(index: number) {
        this.students.splice(index, 1);
      }
      
      

}