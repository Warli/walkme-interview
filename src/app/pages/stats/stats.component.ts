import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  average = {};
  coursesList = [];
  selectedCourses = [];
  coursesDropdownSettings = {
    singleSelection: false,
    text: 'Select Courses',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
  };

  studentsList = [];
  selectedStudents = [];
  studentsDropdownSettings = {
    singleSelection: false,
    text: 'Select Students',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.get_data().subscribe(
      (data) => {
        data
      }
    )
  }

}
