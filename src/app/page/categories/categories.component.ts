import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [
    {id: 1, initial: 'Main', name: 'Main Course'},
    {id: 2, initial: 'Soft', name: 'Soft Drink'},
    {id: 3, initial: 'Dessert', name: 'Dessert'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
