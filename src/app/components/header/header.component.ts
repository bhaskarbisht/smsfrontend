import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from 'src/app/createstudent.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
