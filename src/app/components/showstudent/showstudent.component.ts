import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from 'src/app/createstudent.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css'],
})
export class ShowstudentComponent implements OnInit {
  students: Student[] = [];

  fillStudent = {
    id: 0,
    firstName: '',
    lastName: '',
    standard: 0,
    dob: '',
    subject: '',
  };

  editStudent(student) {
    this.fillStudent = student;
  }

  deleteStudent(id: number) {
    const observable = this.createstudentservice.deleteStudent(id);
    observable.subscribe((response: any) => {
      console.log(response);
      alert('Student Deleted Successfully');
      this.ngOnInit();
      //this.students.splice(index,1);
    });
  }

  updateStudent(id: number) {
    const observable = this.createstudentservice.updateStudent(
      this.fillStudent,
      id
    );
    console.log(this.fillStudent);
    observable.subscribe(
      (response: any) => {
        alert('Student Updated Successfully');
        console.log(response);
        this.ngOnInit();
      },
      function (error) {
        console.log(error);
        alert('Student Not Updated');
      }
    );
  }

  constructor(public createstudentservice: CreatestudentService) {}

  ngOnInit(): void {
    const promise = this.createstudentservice.getStudents();
    promise.subscribe((response) => {
      // console.log(response);
      this.students = response as Student[];
      console.log(this.students);
    });
  }
}
