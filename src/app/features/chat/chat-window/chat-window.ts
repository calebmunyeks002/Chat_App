import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {

  sender: string;

  message: string;

  time: string;

  mine: boolean;

}

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.scss']
})
export class ChatWindowComponent {

  roomName = 'FinTech Kenya';

  onlineMembers = 247;

  typingUser = 'Brian';

  message = '';

  messages: ChatMessage[] = [

    {
      sender: 'Brian',
      message: 'Welcome everyone!',
      time: '09:45',
      mine: false
    },

    {
      sender: 'You',
      message: 'Good morning team.',
      time: '09:46',
      mine: true
    },

    {
      sender: 'Alice',
      message: "Today's deployment starts at 2 PM.",
      time: '09:47',
      mine: false
    }

  ];

  sendMessage(): void {

    if (!this.message.trim()) {
      return;
    }

    this.messages.push({

      sender: 'You',

      message: this.message,

      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),

      mine: true

    });

    this.message = '';

  }

}