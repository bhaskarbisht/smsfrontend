import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from 'src/app/createstudent.service';
import Student from 'src/app/Entity/Student';

declare var jQuery: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id: number;
  std:number;

 student:Student=new Student();
 students:Student[]=[];



  tablehideshow() {
    jQuery('.searchTable').hide();
    jQuery('.searchTableclass').hide();
  }

  getStudentbyid(id: number) {
    const promise = this.createstudentservice.searchStudentById(this.id);
    promise.subscribe(
      (response) => {
        this.student=response as Student;
        alert('Result found');
        console.log(this.student);
        jQuery('.searchTable').show();
      },
      function (error) {
        console.log(error);
        alert('Result Not Found');
        jQuery('.searchTable').hide();
      }
    );
  }


  getStudentbyclassid(std: number) {
    const promise = this.createstudentservice.searchStudentByclassId(this.std);
    promise.subscribe(
      (response) => {
        this.students=response as Student[];
        
        console.log(this.students.length);
        if(this.students.length===0){
          alert("No Record Found");
          jQuery('.searchTableclass').hide();
          jQuery('.searchTable').hide();
        }
          else{
            alert('Result found');
            jQuery('.searchTableclass').show();
            jQuery('.searchTable').hide();
          }
         
        
          
        
      },
      function (error) {
        console.log(error);
        alert('Result Not Found');
        jQuery('.searchTableclass').hide();
      }
    );
  }

  constructor(public createstudentservice: CreatestudentService) {}

  ngOnInit(): void {
    this.tablehideshow();
  }
}
