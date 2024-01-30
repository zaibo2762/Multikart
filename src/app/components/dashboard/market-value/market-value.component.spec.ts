import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketValueComponent } from './market-value.component';

describe('MarketValueComponent', () => {
  let component: MarketValueComponent;
  let fixture: ComponentFixture<MarketValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
