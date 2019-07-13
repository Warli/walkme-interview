import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {take} from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { timer } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rowsData: any[];
  @Input() columns: string[];
  dataSource: MatTableDataSource<any>;

  constructor() {
    this.createTable();
   }

  ngOnInit() {
    this.updateTable();
  }

  createTable() {
    this.dataSource = new MatTableDataSource<any>();
  }

  updateTable() {
    timer(1000).subscribe(() => {
         this.dataSource.data = this.rowsData;
       });
  }

}
