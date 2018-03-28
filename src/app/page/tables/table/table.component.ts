import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  angForm : FormGroup;  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  createForm(){
    this.angForm = this.fb.group({
      code: ['', Validators.required],
      seat: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
