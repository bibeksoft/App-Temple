import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleUIComponent } from './temple-ui.component';

describe('TempleUIComponent', () => {
  let component: TempleUIComponent;
  let fixture: ComponentFixture<TempleUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
