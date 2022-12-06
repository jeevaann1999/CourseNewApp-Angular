import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
courseTitle=""
courseDescription=""
courseVenue=""
courseDuration=""
courseDate=""

courses:any=[{"id":1,"courseTitle":"Java","courseDescription":"Instuctor:Jeeva Ann Jayan","courseVenue":"Online","courseDuration":"30 days","courseDate":"2022-12-06"},{"id":2,"courseTitle":"Python","courseDescription":"Instuctor:Jeeva Ann Jayan","courseVenue":"Online","courseDuration":"30 days","courseDate":"2022-12-06"},{"id":52,"courseTitle":"Advanced Java","courseDescription":"Advanced Java Concepts","courseVenue":"Online","courseDuration":"20 days","courseDate":"2023-01-04"},{"id":53,"courseTitle":"Git","courseDescription":"Advanced Git Concepts","courseVenue":"Online","courseDuration":"10 days","courseDate":"2023-09-22"},{"id":54,"courseTitle":"Angular","courseDescription":"Angular Concepts","courseVenue":"Online","courseDuration":"30 days","courseDate":"2022-11-01"},{"id":55,"courseTitle":"HTML","courseDescription":"Html Concepts","courseVenue":"Online","courseDuration":"10 days","courseDate":"2022-11-05"},{"id":56,"courseTitle":"C","courseDescription":"Core C Concepts","courseVenue":"Online","courseDuration":"15 days","courseDate":"2022-10-09"},{"id":57,"courseTitle":"C+","courseDescription":"Core C+ Concepts","courseVenue":"Online","courseDuration":"15 days","courseDate":"2022-10-29"},{"id":58,"courseTitle":"C++","courseDescription":"Core C++ Concepts","courseVenue":"Online","courseDuration":"15 days","courseDate":"2022-10-07"},{"id":59,"courseTitle":"Javascript","courseDescription":"Core Javasript Concepts","courseVenue":"Online","courseDuration":"30 days","courseDate":"2022-08-15"}]
}
