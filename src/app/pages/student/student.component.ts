import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/class/student';
import { StudentService } from 'src/app/service/student.service';
import { MarksService } from 'src/app/service/marks.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  studentsColumns: string[] = ['Id', 'firstname', 'lastname', 'numberCourses', 'average'];

  constructor(
    private studentSerivce: StudentService,
    private marksService: MarksService
  ) { }

  ngOnInit() {
    this.studentSerivce.get_students().subscribe(
      (studentsObj: any[]) => {
        this.marksService.get_marks().subscribe(
          (marksObj: any[]) => {
            studentsObj.forEach(
              (studentObj) => {
                const grades: number[] = [];
                let average = 0;
                let courseWithGradeCounter = 0;

                studentObj.marks.forEach(
                  (markId) => {
                    const grade = marksObj.find(
                      (mark) => mark.ID === markId);
                    if (grade) {
                      grades.push(grade);
                      if (grade.mark !== -1) {
                        average += grade.mark;
                        courseWithGradeCounter += 1;
                      }
                    }
                  });

                  this.students.push(new Student(
                    studentObj.ID,
                    studentObj.firstName,
                    studentObj.lastName,
                    grades.length,
                    average / courseWithGradeCounter
                  ));
              });

            console.log(this.students);
          });
      });
  }

}
