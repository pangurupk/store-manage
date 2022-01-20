import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Catagory,
  CatagoryService,
} from 'src/app/shared/service/catagory.service';

@Component({
  selector: 'SM-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss'],
})
export class CatagoryComponent implements OnInit {
  public formGroup: FormGroup;
  catagoriesList: Catagory[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private catagoryService: CatagoryService
  ) {
    this.formGroup = this.formBuilder.group({
      catagoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.getCatagories();
  }
  onAdd() {
    if (!this.formGroup.valid) {
      return;
    }
    let name = this.formGroup.get('catagoryName')?.value;
    let description = this.formGroup.get('description')?.value;
    this.catagoryService.addCatagory(name, description);
    this.getCatagories();
  }
  getCatagories() {
    this.catagoryService.getCatagories().subscribe((response) => {
      this.catagoriesList = response;
    });
  }
}
