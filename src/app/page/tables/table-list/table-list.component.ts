import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/table.service';
import { Table } from '../../../models/table.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTables();
  }
  onEdit(_id: String){
    this.tableService.getTable(_id);
  }
  onDelete(_id: String){
    if(confirm('Are you sure to delete this record?') === true){
      this.tableService.deleteTable(_id)
          .subscribe(x => {
            this.tableService.getTables();
          })
    }
  }
}
