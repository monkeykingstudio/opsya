import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgldComponent } from './ogld.component';

describe('OgldComponent', () => {
  let component: OgldComponent;
  let fixture: ComponentFixture<OgldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
