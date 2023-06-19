import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBuddyComponent } from './travel-buddy.component';

describe('TravelBuddyComponent', () => {
  let component: TravelBuddyComponent;
  let fixture: ComponentFixture<TravelBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelBuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
