import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables = [
    {id: 1, seat: 4, description:"Near the Kitchen"},
    {id: 2, seat: 2, description:"Near the Cashier"},
    {id: 3, seat: 4, description:"Near the Entrance"},
    {id: 4, seat: 4, description:"Second floor near the stair"},
    {id: 5, seat: 4, description:"Second floor near the window"},

  ];
  constructor() { }

  ngOnInit() {
  }

}
