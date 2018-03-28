import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [];
  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories()
        .subscribe(data => this.categories = data);
  }

}
