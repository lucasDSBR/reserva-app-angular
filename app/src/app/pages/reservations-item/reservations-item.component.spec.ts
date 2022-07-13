import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsItemComponent } from './reservations-item.component';

describe('ReservationsItemComponent', () => {
  let component: ReservationsItemComponent;
  let fixture: ComponentFixture<ReservationsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
