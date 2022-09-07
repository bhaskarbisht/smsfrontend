import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:8095/createStudent';
const BASE_URL_GET_STUDENT="http://localhost:8095/getAllStudent";
const DELETE_URL="http://localhost:8095/deleteStudent/";
const UPDATE_URL="http://localhost:8095/update/"
const SEARCH_BY_ID="http://localhost:8095/getStudent/"
const SEARCH_BY_CLASSID="http://localhost:8095/standard/"


@Injectable({
  providedIn: 'root'
})
export class CreatestudentService {

createStudent(student:{
  firstName: string;
  lastName: string;
  standard: number;
  dob: string;
  subject: string;
}){
  return this.http.post(BASE_URL, student);
}


//method to get all students from API
getStudents(){
  return this.http.get(BASE_URL_GET_STUDENT);
}

//Delete by Id Method
deleteStudent(id:number){
  return this.http.delete(DELETE_URL+id);

}

updateStudent(student:{
  firstName: string;
  lastName: string;
  standard: number;
  dob: string;
  subject: string;
},id:number){
  return this.http.put(UPDATE_URL+id, student);
}

searchStudentById(id:number){
  return this.http.get(SEARCH_BY_ID+id);
}


searchStudentByclassId(id:number){
  console.log("number"+id);
  return this.http.get(SEARCH_BY_CLASSID+id);
}


  constructor(public http: HttpClient) { }
}
