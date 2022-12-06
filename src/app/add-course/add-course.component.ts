import { Component } from '@angular/core';

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
  }
}
