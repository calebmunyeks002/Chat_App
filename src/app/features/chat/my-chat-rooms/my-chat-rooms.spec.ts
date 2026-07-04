import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChatRooms } from './my-chat-rooms';

describe('MyChatRooms', () => {
  let component: MyChatRooms;
  let fixture: ComponentFixture<MyChatRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChatRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(MyChatRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
