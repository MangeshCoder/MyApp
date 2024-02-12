import { Component } from "@angular/core";
import { Operations } from "./MainService";
import { student } from "src/AddStudent/studentModel";
import { StudentService } from "./MainService";

@Component({
    selector:'app-root',
    templateUrl:'Main.html',
    providers:[StudentService]
})
export class StudentComponent {
   

    
    rno:any="";
    name:any="";
    english:any="";
    maths:any="";
    science:any="";
    total:any="";
    percentage:any="";
    result:any="";
    students:any=[];
    index:any="";

    
        constructor(private studentService: StudentService) {}
      
        AddStudents(rno: "", name: "", english: "",math:"",science:"",total:"",percentage:"",result:"") {
            const student = { rno, name, english,math,science,total,percentage,result }; // Create a student object with the provided data
            this.students=this.studentService.addStudent(student); // Add the student to the studentService.students array
            console.log(student);
            alert("student added successfully");
          }

          UpdateStudent(student: any, index: number) {
            this.studentService.updateStudent(student, index);
            this.students = this.studentService.addStudent(student); // Get the updated students' data
          }
          DeleteStudent(index: number) {
            this.studentService.deleteStudent(index);
            this.students = this.studentService.addStudent(student); // Get the updated students' data
          }
   
}