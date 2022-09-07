import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from 'src/app/createstudent.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student:Student=new Student();

  saveStudent(){
 
    const observable=this.createstudentservice.createStudent(this.student);
    observable.subscribe(
      (response:any)=>{
        alert("Student saved Successfully")
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Student Not saved");
      }
    )
  }



 


  constructor(public createstudentservice:CreatestudentService) { }


  ngOnInit(): void {
  }

}
