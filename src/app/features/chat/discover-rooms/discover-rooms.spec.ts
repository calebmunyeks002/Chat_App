import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverRooms } from './discover-rooms';

describe('DiscoverRooms', () => {
  let component: DiscoverRooms;
  let fixture: ComponentFixture<DiscoverRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
