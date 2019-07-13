import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course';
import { CourseService } from 'src/app/service/course.service';
import { MarksService } from 'src/app/service/marks.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  coursesColumns: string[] = ['Id', 'Course name', 'Number of students', 'Averga mark'];

  constructor(
    private courseService: CourseService,
    private marksSerivce: MarksService
  ) { }

  ngOnInit() {
    this.courseService.get_courses().subscribe(
      (coursesObj) => {
        this.marksSerivce.get_marks().subscribe(
          (marksObj) => {
            coursesObj.forEach(
              (courseObj) => {
                let studentsCount = 0;
                let average = 0;
                let courseWithGradeCounter = 0;

                courseObj.students.forEach(
                  (studentId) => {
                    const grade = marksObj.find(
                      (mark) => mark.studentId === studentId);
                    if (grade) {
                      studentsCount += 1;
                      if (grade.mark !== -1) {
                        average += grade.mark;
                        courseWithGradeCounter += 1;
                      }
                    }
                  });

                  this.courses.push(new Course(
                    courseObj.ID,
                    courseObj.name,
                    studentsCount,
                    average / courseWithGradeCounter
                  ));
              });

              console.log(this.courses);
          });
      });
  }

}
