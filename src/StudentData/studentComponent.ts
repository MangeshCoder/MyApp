import { Component } from '@angular/core';
// import { StudentData } from './student-data.service';
import { StudentData } from './studentData';

@Component({
  selector: 'app-root',
  templateUrl: 'student.html',
  
  providers: [StudentData] // Add the StudentData service to the providers array
})
export class StudentComponent {
  students: any[] = []; // Define an array to store students' data

  constructor(private studentData: StudentData) {}

  getStudents() {
    return this.students;
  }
  
  AddStudent(student: any) {
    this.studentData.addStudent(student);
    this.students = this.studentData.getStudents(); // Get the updated students' data
  }

  UpdateStudent(student: any, index: number) {
    this.studentData.updateStudent(student, index);
    this.students = this.studentData.getStudents(); // Get the updated students' data
  }

  DeleteStudent(index: number) {
    this.studentData.deleteStudent(index);
    this.students = this.studentData.getStudents(); // Get the updated students' data
  }
}
