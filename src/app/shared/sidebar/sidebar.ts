import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {

  @Input() collapsed = false;

  menuItems: MenuItem[] = [

  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },

  {
    label: 'Chat Rooms',
    icon: 'forum',
    route: '/dashboard/chat-rooms'
  },

  {
    label: 'My Rooms',
    icon: 'groups',
    route: '/dashboard/my-rooms'
  },

  {
    label: 'Inbox',
    icon: 'mail',
    route: '/dashboard/inbox'
  },

  {
    label: 'Notifications',
    icon: 'notifications',
    route: '/dashboard/notifications'
  },

  {
    label: 'Search',
    icon: 'search',
    route: '/dashboard/search'
  },

  {
    label: 'Profile',
    icon: 'person',
    route: '/dashboard/profile'
  },

  {
    label: 'Settings',
    icon: 'settings',
    route: '/dashboard/settings'
  }

];

}