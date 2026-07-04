import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MyRoom {
  id: number;
  name: string;
  members: number;
  joined: string;
  role: string;
  online: boolean;
  eligibleForAdmin?: boolean;
  monthsRemaining?: number;
}

@Component({
  selector: 'app-my-chat-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-chat-rooms.html',
  styleUrls: ['./my-chat-rooms.scss']
})
export class MyChatRoomsComponent implements OnInit {

  constructor(private router: Router) {}

  rooms: MyRoom[] = [
    {
      id: 1,
      name: 'FinTech Kenya',
      members: 453,
      joined: '2024-03-18',
      role: 'Member',
      online: true
    },
    {
      id: 2,
      name: 'Angular Developers',
      members: 782,
      joined: '2023-02-10',
      role: 'Admin',
      online: true
    },
    {
      id: 3,
      name: 'Cyber Security',
      members: 681,
      joined: '2025-01-09',
      role: 'Member',
      online: false
    },
    {
      id: 4,
      name: 'Cloud Engineers',
      members: 512,
      joined: '2022-04-21',
      role: 'Owner',
      online: true
    }
  ];

  ngOnInit(): void {
    this.calculateEligibility();
  }

  calculateEligibility(): void {

    const today = new Date();

    this.rooms.forEach(room => {

      const joinedDate = new Date(room.joined);

      const months =
        (today.getFullYear() - joinedDate.getFullYear()) * 12 +
        (today.getMonth() - joinedDate.getMonth());

      if (months >= 12) {

        room.eligibleForAdmin = true;
        room.monthsRemaining = 0;

      } else {

        room.eligibleForAdmin = false;
        room.monthsRemaining = 12 - months;

      }

    });

  }

  openRoom(room: MyRoom): void {
  this.router.navigate(['/dashboard/chat', room.id]);
}

  leaveRoom(room: MyRoom): void {

    alert("Leaving " + room.name);

  }

  deleteRoom(room: MyRoom): void {

    alert("Deleting " + room.name);

  }

  requestAdmin(room: MyRoom): void {

    if (!room.eligibleForAdmin) {

      alert(`You can request admin rights in ${room.monthsRemaining} month(s).`);
      return;

    }

    alert("Admin request submitted successfully.");

  }

}