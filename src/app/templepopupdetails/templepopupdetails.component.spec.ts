import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplepopupdetailsComponent } from './templepopupdetails.component';

describe('TemplepopupdetailsComponent', () => {
  let component: TemplepopupdetailsComponent;
  let fixture: ComponentFixture<TemplepopupdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplepopupdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplepopupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
