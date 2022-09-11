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
  alertupdate: boolean = false;

  toggle:boolean;
  cardview: boolean = false;
  listview: boolean = true;

  closeList() {
    if(this.toggle){
      this.cardview=false;
      this.listview=true;

    }
    else{
     
      this.cardview=true;
      this.listview=false;
    }

  }

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

  //delete student
  deleteStudent(id: number) {
    const observable = this.createstudentservice.deleteStudent(id);
    observable.subscribe((response: any) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  //update student
  updateStudent(id: number) {
    const observable = this.createstudentservice.updateStudent(
      this.fillStudent,
      id
    );
    console.log(this.fillStudent);
    observable.subscribe(
      (response: any) => {
        this.alertupdate = true;
        console.log(response);
        this.ngOnInit();
      },
      function (error) {
        console.log(error);
        alert('Student Not Updated');
      }
    );
  }

  closeAlert() {
    this.alertupdate = false;
  }

  constructor(public createstudentservice: CreatestudentService) {}

  ngOnInit(): void {
    const promise = this.createstudentservice.getStudents();
    promise.subscribe((response) => {
      this.students = response as Student[];
      console.log(this.students);
    });
  }
}
