import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  //categories = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories();
  }
  onEdit(_id : String){
    //alert(JSON.stringify(category));
    this.categoryService.getCategory(_id);
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
