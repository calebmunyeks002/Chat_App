import { Routes } from '@angular/router';

import { WelcomeComponent } from './features/welcome/welcome';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';

import { DashboardComponent } from './features/dashboard/dashboard';
import { DashboardHomeComponent } from './features/dashboard/dashboard-home/dashboard-home';
import { PrivateChatComponent } from './features/inbox/private-chat/private-chat';
import { ChatRoomsComponent } from './features/chat/chat-rooms/chat-rooms';
import { DiscoverRoomsComponent } from './features/chat/discover-rooms/discover-rooms';
import { CreateRoomComponent } from './features/chat/create-room/create-room';
import { CommunityRoomsComponent } from './features/chat/community-rooms/community-rooms';
import { ChatWindowComponent } from './features/chat/chat-window/chat-window';
import { MyChatRoomsComponent } from './features/chat/my-chat-rooms/my-chat-rooms';
import { InboxComponent } from './features/inbox/inbox/inbox';
import { NotificationsComponent } from './features/notifications/notifications';
import { SearchComponent } from './features/search/search';
import { ProfileComponent } from './features/profile/profile';
import { SettingsComponent } from './features/settings/settings';

export const routes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,

    children: [

      // Default Dashboard Page
      {
        path: '',
        component: DashboardHomeComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'inbox/chat/:id',
        component: PrivateChatComponent
      },

      {
        path: 'chat-rooms',
        component: ChatRoomsComponent,

        children: [

          {
            path: '',
            redirectTo: 'discover',
            pathMatch: 'full'
          },

          {
            path: 'discover',
            component: DiscoverRoomsComponent
          },

          {
            path: 'create',
            component: CreateRoomComponent
          },

          {
            path: 'community',
            component: CommunityRoomsComponent
          }

        ]

      },

      {
        path: 'chat/:id',
        component: ChatWindowComponent
      },

      {
        path: 'my-rooms',
        component: MyChatRoomsComponent
      },

      {
        path: 'notifications',
        component: NotificationsComponent
      },

      {
        path: 'search',
        component: SearchComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: 'settings',
        component: SettingsComponent
      }

    ]

  },

  {
    path: '**',
    redirectTo: ''
  }

];