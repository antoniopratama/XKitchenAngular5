import { Component, OnInit, TemplateRef} from '@angular/core';
import { UserService } from '../../services/user.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef;
  isNew: Boolean = true;
  constructor(private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
    this.userService.getUsers();
  }
  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.isNew=true;
    this.userService.selectedUser = new User();
  }

  openModal(  template: TemplateRef<any> ){
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value._id == null){
      this.userService.postUser(form.value)
        .subscribe(data => {
          this.userService.getUsers();
          this.resetForm(form);
          this.modalRef.hide();
        });
    } else {
      this.userService.patchUser(form.value._id, form.value)
          .subscribe(data => {
            this.userService.getUsers();
            this.resetForm(form);
            this.modalRef.hide();
          });
    }
  }

  onEdit(template: TemplateRef<any>, _id : String){
    this.userService.getUser(_id);
    this.openModal(template);
    this.isNew = false;
  }

  onDelete(_id: String){
    if(confirm('Are you sure to delete this record?') === true){
      this.userService.deleteUser(_id)
          .subscribe(x => {
            this.userService.getUsers();
          })
    }
  }

}
