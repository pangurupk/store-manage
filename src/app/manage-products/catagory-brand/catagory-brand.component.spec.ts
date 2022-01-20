import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryBrandComponent } from './catagory-brand.component';

describe('CatagoryBrandComponent', () => {
  let component: CatagoryBrandComponent;
  let fixture: ComponentFixture<CatagoryBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
