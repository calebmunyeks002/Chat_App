import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {

  user = {

    username: 'caleb01',

    fullName: 'Caleb Munyekenye',

    email: 'caleb@example.com',

    phone: '+254712345678',

    bio: 'Electrical & Telecommunication Engineer | Full Stack Developer | AI Enthusiast',

    lastSeen: 'Today at 10:25 AM',

    online: true,

    avatar: 'https://i.pravatar.cc/300?img=12',

    joined: 'March 2024'

  };

  statistics = [

    {
      title:'Rooms Joined',
      value:14,
      icon:'💬'
    },

    {
      title:'Communities',
      value:6,
      icon:'👥'
    },

    {
      title:'Messages',
      value:1523,
      icon:'📨'
    },

    {
      title:'Account Age',
      value:'2 Years',
      icon:'📅'
    }

  ];

  achievements = [

    'Verified Member',

    'Room Creator',

    'Top Contributor',

    'Community Moderator'

  ];

  editProfile(){

    alert("Edit Profile");

  }

  shareProfile(){

    alert("Share Profile");

  }

}