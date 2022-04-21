import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketBlockComponent } from './rocket-block.component';

describe('RocketBlockComponent', () => {
  let component: RocketBlockComponent;
  let fixture: ComponentFixture<RocketBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
