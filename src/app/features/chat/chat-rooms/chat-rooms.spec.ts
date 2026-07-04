import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRooms } from './chat-rooms';

describe('ChatRooms', () => {
  let component: ChatRooms;
  let fixture: ComponentFixture<ChatRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
