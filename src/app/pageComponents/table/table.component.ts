import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { timer } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rowsData: any[];
  @Input() columns: string[];
  dataSource: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog
  ) {
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

  editData(row): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        columns: this.columns,
        row: row,
        mode: 'Edit'
      }
    });
  }

  createRow(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        columns: this.columns,
        row: {},
        mode: 'Create'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.Id) {
        timer(0).subscribe(() => {
          this.dataSource.data = this.dataSource.data.concat(result);
        });
      }
    });
  }


}
