import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  BrandService,
  CatagoryBrand,
} from 'src/app/shared/service/brand.service';
import {
  CatagoryType,
  CatagoryTypeService,
} from 'src/app/shared/service/catagory-type.service';
import {
  Catagory,
  CatagoryService,
} from 'src/app/shared/service/catagory.service';

@Component({
  selector: 'SM-catagory-brand',
  templateUrl: './catagory-brand.component.html',
  styleUrls: ['./catagory-brand.component.scss'],
})
export class CatagoryBrandComponent implements OnInit {
  catagoryList: Catagory[] = [];
  catagoryNames: any = [];
  catagoryTypeNames: any = [];
  catagorySelected = false;
  typeSelected = false;
  formGroup: FormGroup;
  selectedCategory = '';
  catagoryTypeList: CatagoryType[] = [];
  brandsList: CatagoryBrand[] = [];
  selectedType = '';
  brandNames: any = [];
  constructor(
    private catagoryService: CatagoryService,
    private catagoryTypeService: CatagoryTypeService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      brandName: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.catagoryService.getCatagories().subscribe((response) => {
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
  getCatagoryTypes(catagory: string) {
    this.catagoryTypeService
      .getCatagoryTypes(catagory)
      .subscribe((response) => {
        if (response.length === 0) {
          this.catagoryTypeNames = [];
        } else {
          for (let eachType of response) {
            this.catagoryTypeNames.push(eachType.name);
          }
        }
      });
  }
  onTypeSelect(type: string) {
    this.typeSelected = true;
    this.selectedType = type;
    this.brandService
      .getBrand(this.selectedCategory, this.selectedType)
      .subscribe((response) => {
        this.brandsList = response;
        if (response.length === 0) {
          this.brandNames = [];
        } else {
          response.forEach((brand) => {
            this.brandNames.push(brand.name);
          });
        }
      });
  }
  onAdd() {
    if (!this.formGroup.valid) {
      return;
    }
    let name = this.formGroup.get('brandName')?.value;
    let description = this.formGroup.get('description')?.value;
    this.brandService.addBrand(
      this.selectedCategory,
      this.selectedType,
      name,
      description
    );
    this.getBrands(this.selectedCategory, this.selectedType);
  }
  getBrands(catagory: string, catagoryType: string) {
    this.brandService.getBrand(catagory, catagoryType).subscribe((response) => {
      this.brandsList = response;
    });
  }
}
