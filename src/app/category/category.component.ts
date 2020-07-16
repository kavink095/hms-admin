import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Categoryservice } from '../services/categoryservice';
import { CategoryDTO } from '../dtos/categoryDTO';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  category: CategoryDTO = new CategoryDTO;

  constructor(private categoryservice: Categoryservice) { }
  formCategory = new FormGroup({
    id: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    createby: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  saveCategory(): void {
    this.category.catID = this.formCategory.get('id').value;
    this.category.catDesc = this.formCategory.get('desc').value;
    this.category.creaDate = this.formCategory.get('date').value;
    this.category.creaBy = this.formCategory.get('createby').value;

    this.categoryservice.saveAdmin(this.category).subscribe(
      (result) => {
        if (result || !Validators === null) {
          console.log(this.category);
          alert('New category value has been saved successfully..');
          this.formCategory.get('id').setValue('');
          this.formCategory.get('desc').setValue('');
          this.formCategory.get('date').setValue('');
          this.formCategory.get('createby').setValue('');
          this.formCategory.get('check').setValue('');
        } else {
          alert('Failed to save the category value..');
        }
      }
    );

  }
}
