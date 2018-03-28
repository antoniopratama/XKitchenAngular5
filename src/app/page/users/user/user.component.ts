import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  createForm(){
    this.angForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      badgeId: ['', Validators.required],
      nick: ['', Validators.required],
      fullName: ['', Validators.required]
    });
  }
}
