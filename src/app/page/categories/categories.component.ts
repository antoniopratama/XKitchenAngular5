import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal'
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  modalRef: BsModalRef;
  isNew: Boolean = true;
  constructor(private categoryService: CategoryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
    this.categoryService.getCategories();
  }

  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.isNew=true;
    this.categoryService.selectedCategory = new Category();
  }

  openModal(  template: TemplateRef<any> ){
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm){
     if(form.value._id == null){
       this.categoryService.postCategory(form.value)
         .subscribe(data => {
           this.categoryService.getCategories();
           this.resetForm(form);
           this.modalRef.hide();
         });
     } else {
       this.categoryService.patchCategory(form.value._id, form.value)
           .subscribe(data => {
             this.categoryService.getCategories();
             this.resetForm(form);
             this.modalRef.hide();
           });
     }
  }

  onEdit(template: TemplateRef<any>, _id : String){
    //alert(JSON.stringify(category));
    this.categoryService.getCategory(_id);
    this.openModal(template)
    this.isNew = false;
  }
  onDelete(_id: String){
    if(confirm('Are you sure to delete this record?') === true){
      this.categoryService.deleteCategory(_id)
          .subscribe(x => {
            this.categoryService.getCategories();
          })
    }
  }
}
