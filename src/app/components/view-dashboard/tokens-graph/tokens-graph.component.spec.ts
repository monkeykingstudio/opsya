import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensGraphComponent } from './tokens-graph.component';

describe('TokensGraphComponent', () => {
  let component: TokensGraphComponent;
  let fixture: ComponentFixture<TokensGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokensGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
