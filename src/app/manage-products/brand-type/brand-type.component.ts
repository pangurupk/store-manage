import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AddProductService } from 'src/app/shared/service/add-product.service';
import { BrandTypeService } from 'src/app/shared/service/brand-type.service';
import {
  CatagoryBrand,
  BrandService,
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
  selector: 'SM-brand-type',
  templateUrl: './brand-type.component.html',
  styleUrls: ['./brand-type.component.scss'],
})
export class BrandTypeComponent implements OnInit {
  catagoryList: Catagory[] = [];
  catagoryNames: any = [];
  catagoryTypeList: CatagoryType[] = [];
  catagoryTypeNames: any = [];
  brandsList: CatagoryBrand[] = [];
  brandNames: any = [];
  productsList: any = [];
  productNames: any = [];
  selectedCatagory = '';
  catagorySelected = false;
  selectedType = '';
  typeSelected = false;
  selectedBrand = '';
  brandSelected = false;

  formGroup: FormGroup;

  constructor(
    private catagoryService: CatagoryService,
    private catagoryTypeService: CatagoryTypeService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private brandTypeService: BrandTypeService
  ) {
    this.formGroup = this.formBuilder.group({
      productName: new FormControl('', [Validators.required]),
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
    this.selectedCatagory = catagory;
    this.catagorySelected = true;
    this.getCatagoryTypes(this.selectedCatagory);
    this.catagoryTypeNames = [];
  }
  getCatagoryTypes(catagory: string) {
    this.catagoryTypeService
      .getCatagoryTypes(catagory)
      .subscribe((response) => {
        for (let eachType of response) {
          this.catagoryTypeNames.push(eachType.name);
        }
      });
  }
  onTypeSelect(type: string) {
    this.typeSelected = true;
    this.selectedType = type;
    this.brandService;
    this.getBrands(this.selectedCatagory, this.selectedType);
    this.brandNames = [];
  }

  getBrands(catagory: string, catagoryType: string) {
    this.brandService.getBrand(catagory, catagoryType).subscribe((response) => {
      for (let eachBrand of response) {
        this.brandNames.push(eachBrand.name);
      }
    });
  }
  onBrandSelect(brand: string) {
    this.brandSelected = true;
    this.selectedBrand = brand;
    this.getProducts(
      this.selectedCatagory,
      this.selectedType,
      this.selectedBrand
    );
  }
  onAdd() {
    if (!this.formGroup.valid) {
      return;
    }
    let name = this.formGroup.get('productName')?.value;
    let description = this.formGroup.get('description')?.value;
    this.brandTypeService.addBrandType(
      this.selectedCatagory,
      this.selectedType,
      this.selectedBrand,
      name,
      description
    );
    this.getProducts(
      this.selectedCatagory,
      this.selectedType,
      this.selectedBrand
    );
  }
  getProducts(catagory: string, catagoryType: string, brand: string) {
    this.brandTypeService
      .getBrandType(catagory, catagoryType, brand)
      .subscribe((response) => {
        this.productsList = response;
      });
  }
}
