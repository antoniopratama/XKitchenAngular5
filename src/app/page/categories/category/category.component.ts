import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  createForm(){
    this.angForm = this.fb.group({
      code: ['', Validators.required],
      initial: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
}
