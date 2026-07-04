import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message';
import { Conversation } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // ======================================
  // CONVERSATIONS
  // ======================================

  private conversations: Conversation[] = [

    {
      id: 1,
      name: 'Kevin Mwangi',
      lastMessage: 'See you tomorrow.',
      lastTime: '09:15',
      unread: 2,
      online: true,
      avatar: 'https://i.pravatar.cc/150?img=5'
    },

    {
      id: 2,
      name: 'Alice Wanjiru',
      lastMessage: 'Meeting starts at 2 PM.',
      lastTime: 'Yesterday',
      unread: 0,
      online: false,
      avatar: 'https://i.pravatar.cc/150?img=8'
    },

    {
      id: 3,
      name: 'Brian Kiptoo',
      lastMessage: 'Thank you!',
      lastTime: 'Monday',
      unread: 5,
      online: true,
      avatar: 'https://i.pravatar.cc/150?img=12'
    }

  ];

  // ======================================
  // MESSAGES
  // ======================================

  private messages: ChatMessage[] = [

    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      senderName: 'Kevin',
      message: 'Hello Caleb 👋',
      time: '09:10',
      mine: false,
      status: 'Read'
    },

    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      senderName: 'Me',
      message: 'Hello Kevin!',
      time: '09:11',
      mine: true,
      status: 'Read'
    }

  ];

  // ======================================
  // CONVERSATIONS
  // ======================================

  getConversations(): Conversation[] {

    return this.conversations;

  }

  // ======================================
  // MESSAGES
  // ======================================

  getMessages(): ChatMessage[] {

    return this.messages;

  }

  sendMessage(message: ChatMessage): void {

    this.messages.push(message);

  }

  deleteMessage(id: number): void {

    this.messages =
      this.messages.filter(message => message.id !== id);

  }

  editMessage(id: number, text: string): void {

    const message =
      this.messages.find(message => message.id === id);

    if (message) {

      message.message = text;

    }

  }

}