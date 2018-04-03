import { Component, OnInit, TemplateRef } from '@angular/core';
import { TableService } from '../../services/table.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Table } from '../../models/table.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  modalRef: BsModalRef;
  isNew: Boolean = true;
  constructor(private tableService: TableService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
    this.tableService.getTables();
  }
  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.isNew=true;
    this.tableService.selectedTable = new Table();
  }

  openModal(  template: TemplateRef<any> ){
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onEdit(template: TemplateRef<any>, _id: String){
    this.tableService.getTable(_id);
    this.openModal(template);
    this.isNew = false;
  }

  onSubmit(form: NgForm){
    if(form.value._id == null){
      this.tableService.postTable(form.value)
        .subscribe(data => {
          this.tableService.getTables();
          this.resetForm(form);
          this.modalRef.hide();
        });
    } else {
      this.tableService.patchTable(form.value._id, form.value)
          .subscribe(data => {
            this.tableService.getTables();
            this.resetForm(form);
            this.modalRef.hide();
          });
    }
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
