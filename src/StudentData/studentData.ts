import { Injectable } from '@angular/core';

@Injectable()
export class StudentData {
  private students: any[] = [];

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
