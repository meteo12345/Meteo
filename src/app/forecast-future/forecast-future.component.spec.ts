import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastFutureComponent } from './forecast-future.component';

describe('ForecastFutureComponent', () => {
  let component: ForecastFutureComponent;
  let fixture: ComponentFixture<ForecastFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
