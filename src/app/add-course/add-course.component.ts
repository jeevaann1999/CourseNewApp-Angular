import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseTitle=""
  courseDescription=""
  courseVenue=""
  courseDuration=""
  courseDate=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let courses:any={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseVenue":this.courseVenue,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate
    }
    console.log(courses)
    this.api.addCourse(courses).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status="") {
          alert("Course added successfully")
          
        } else {
          alert("Something Went Wrong")
        }
      }
    )
  }
}
