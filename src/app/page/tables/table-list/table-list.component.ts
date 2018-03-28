import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tables = [];
  constructor(private _tableService: TableService) { }

  ngOnInit() {
    this._tableService.getTables()
        .subscribe(data => this.tables = data)
  }

}
