import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
public students:Student[];

constructor(private studentService:StudentService) { }

ngOnInit(){
  this.getStudents();
}


public getStudents(): void {
  this.studentService.getStudents().subscribe(
    (response: Student[]) => {
      this.students = response;
      console.log(this.students);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


}
