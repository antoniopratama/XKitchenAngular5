import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { TableService } from '../../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  angForm : FormGroup;  
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.tableService.selectedTable = {
      _id : null,
      code : '',
      seat : 0,
      description : ''
    }
  }
  onSubmit(form: NgForm){
    if(form.value._id == null){
      this.tableService.postTable(form.value)
        .subscribe(data => {
          this.tableService.getTables();
          this.resetForm(form);
        });
    } else {
      this.tableService.patchTable(form.value._id, form.value)
          .subscribe(data => {
            this.tableService.getTables();
            this.resetForm(form);
          });
    }
  }
}
