import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRooms } from './community-rooms';

describe('CommunityRooms', () => {
  let component: CommunityRooms;
  let fixture: ComponentFixture<CommunityRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
