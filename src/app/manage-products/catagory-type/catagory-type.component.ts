import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CatagoryType,
  CatagoryTypeService,
} from 'src/app/shared/service/catagory-type.service';
import {
  Catagory,
  CatagoryService,
} from 'src/app/shared/service/catagory.service';

@Component({
  selector: 'SM-catagory-type',
  templateUrl: './catagory-type.component.html',
  styleUrls: ['./catagory-type.component.scss'],
})
export class CatagoryTypeComponent implements OnInit {
  catagoryNames: Catagory[] = [];
  catagorySelected = false;
  formGroup: FormGroup;
  selectedCategory = '';
  catagoryTypeList: CatagoryType[] = [];
  constructor(
    private catagorService: CatagoryService,
    private formBuilder: FormBuilder,
    private catagoryTypeService: CatagoryTypeService
  ) {
    this.formGroup = this.formBuilder.group({
      typeName: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.catagorService.getCatagories().subscribe((response) => {
      for (let eachCatagory of response) {
        this.catagoryNames.push(eachCatagory.name);
      }
    });
  }
  onCatagorySelect(catagory: string) {
    this.selectedCategory = catagory;
    this.catagorySelected = true;
    this.getCatagoryTypes(this.selectedCategory);
  }
  onAdd() {
    if (!this.formGroup.valid) {
      return;
    }
    let name = this.formGroup.get('typeName')?.value;
    let description = this.formGroup.get('description')?.value;
    this.catagoryTypeService.addCatagoryType(
      this.selectedCategory,
      name,
      description
    );
    this.getCatagoryTypes(this.selectedCategory);
  }
  getCatagoryTypes(selectedCatagory: string) {
    this.catagoryTypeService
      .getCatagoryTypes(selectedCatagory)
      .subscribe((response) => {
        this.catagoryTypeList = response;
      });
  }
}
