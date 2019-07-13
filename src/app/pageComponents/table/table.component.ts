import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rowsData: any[];
  @Input() columns: string[];
  dataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
    this.createTable();
  }

  createTable() {
    this.dataSource = new MatTableDataSource(this.rowsData);
  }

}
