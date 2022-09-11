import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from 'src/app/createstudent.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id: number;
  std: number;

  showtableid: boolean = false;
  showtableclass: boolean = false;

  student: Student = new Student();
  students: Student[] = [];

  //search student by id
  getStudentbyid(id: number) {
    const promise = this.createstudentservice.searchStudentById(this.id);
    promise.subscribe(
      (response) => {
        this.student = response as Student;
        if (this.student == null) {
          alert('Result Not found');
          console.log(this.student);
          this.showtableid = false;
          this.showtableclass = false;
        }
        else{
        alert('Result found');
        console.log(this.student);
        this.showtableid = true;
        this.showtableclass = false;

        }
      },
      function (error) {
        console.log(error);

        alert('Result Not Found');
      }
    );
  }

  //search student by class id
  getStudentbyclassid(std: number) {
    const promise = this.createstudentservice.searchStudentByclassId(this.std);
    promise.subscribe(
      (response) => {
        this.students = response as Student[];

        console.log(this.students.length);
        if (this.students.length === 0) {
          alert('No Record Found');
          this.showtableclass = false;
          this.showtableid = false;
        } else {
          alert('Result found');
          this.showtableclass = true;
          this.showtableid = false;
        }
      },
      function (error) {
        console.log(error);
        alert('Result Not Found');
      }
    );
  }

  constructor(public createstudentservice: CreatestudentService) {}

  ngOnInit(): void {}
}
