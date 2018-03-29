import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  angForm: FormGroup;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.categoryService.selectedCategory = {
      _id : null,
      code : '',
      initial : '',
      name : ''
    }
  }
  onSubmit(form: NgForm){
    if(form.value._id == null){
      this.categoryService.postCategory(form.value)
        .subscribe(data => {
          this.categoryService.getCategories();
          this.resetForm(form);
        });
    } else {
      this.categoryService.patchCategory(form.value._id, form.value)
          .subscribe(data => {
            this.categoryService.getCategories();
            this.resetForm(form);
          });
    }
  }
}
