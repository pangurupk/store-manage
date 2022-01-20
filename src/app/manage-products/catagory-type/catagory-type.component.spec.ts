import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryTypeComponent } from './catagory-type.component';

describe('CatagoryTypeComponent', () => {
  let component: CatagoryTypeComponent;
  let fixture: ComponentFixture<CatagoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
