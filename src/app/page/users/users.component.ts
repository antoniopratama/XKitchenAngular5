import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {id:1, nick:"Ita", fullName:"Nurita Cahyadi"},
    {id:2, nick:"Bani", fullName:"Bagus Hambuni"},
    {id:3, nick:"Parman", fullName:"Suparman"},
    {id:4, nick:"Charly", fullName:"Udin Cecep"},
    {id:5, nick:"Rudi", fullName:"Nasrudin"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
