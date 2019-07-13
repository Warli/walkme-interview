import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

export interface allData {
  courses: any;
  students: any;
  marks: any;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data: allData;
  average = {
    total: 0,
    countTotal: 0,
    avg: 0
  };
  calcualted = false;

  coursesList = [];
  selectedCourses = [];
  coursesDropdownSettings = {
    singleSelection: false,
    text: 'Select Courses',
    labelKey: 'name',
    primaryKey: 'ID',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
  };

  studentsList = [];
  selectedStudents = [];
  studentsDropdownSettings = {
    singleSelection: false,
    text: 'Select Students',
    labelKey: 'firstName',
    primaryKey: 'ID',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.get_data().subscribe(
      (data: allData) => {
        this.data = data;
        timer(0).subscribe(() => {
          this.coursesList = data.courses;
          this.studentsList = data.students;
        });

      });
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedCourses);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedCourses);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}

  calculate() {
    this.average.total = 0;
    this.average.countTotal = 0;

    this.selectedCourses.forEach(
      (course) => {
        const avg = this.calculateCourseAverage(course.ID, course.students);
        this.average[course.ID] = avg ? avg : 0;
      });

    this.average.avg = this.average.countTotal !== 0 ? this.average.total / this.average.countTotal : 0;
    this.calcualted = true;
  }

  private calculateCourseAverage(courseId, studenstInCourse) {
    let courseAverage = 0;
    let courseStudentCount = 0;

    studenstInCourse.forEach(
      (studentId) => {
        const studentObj = this.selectedStudents.find((student) => student.ID === studentId);
        if (studentObj) {
          const studentMarks = studentObj.marks;
          studentMarks.forEach(
            (studentMark) => {
              const markObj = this.data.marks.find((mark) => mark.courseId === courseId && mark.ID === studentMark);
              if (markObj &&  markObj.mark !== -1) {
                courseAverage += markObj.mark;
                courseStudentCount += 1;
              }
            });
        }
      });

    this.average.total += courseAverage;
    this.average.countTotal += courseStudentCount;
    return courseAverage / courseStudentCount;
  }
}
