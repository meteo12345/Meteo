import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysWeatherComponent } from './todays-weather.component';

describe('TodaysWeatherComponent', () => {
  let component: TodaysWeatherComponent;
  let fixture: ComponentFixture<TodaysWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
