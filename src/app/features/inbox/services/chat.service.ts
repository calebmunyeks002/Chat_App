import { Injectable } from '@angular/core';

import { ChatMessage } from '../models/chat-message';
import { Conversation } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {}

  // ==========================================
  // CONVERSATIONS
  // ==========================================

  private conversations: Conversation[] = [

    {
      id: 1,
      name: 'Kevin Mwangi',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMessage: 'See you tomorrow.',
      time: '09:40',
      online: true,
      unread: 2
    },

    {
      id: 2,
      name: 'Alice Wanjiku',
      avatar: 'https://i.pravatar.cc/150?img=32',
      lastMessage: 'Meeting starts at 2 PM.',
      time: 'Yesterday',
      online: false,
      unread: 0
    },

    {
      id: 3,
      name: 'Brian Otieno',
      avatar: 'https://i.pravatar.cc/150?img=15',
      lastMessage: 'Thanks!',
      time: 'Monday',
      online: true,
      unread: 1
    }

  ];

  // ==========================================
  // MESSAGES
  // ==========================================

  private messages: ChatMessage[] = [

    {
      id: 1,
      senderId: 2,
      receiverId: 1,
      senderName: 'Kevin Mwangi',
      message: 'Hello Caleb 👋',
      time: '09:10',
      mine: false,
      status: 'Read'
    },

    {
      id: 2,
      senderId: 1,
      receiverId: 2,
      senderName: 'Me',
      message: 'Hello Kevin!',
      time: '09:11',
      mine: true,
      status: 'Read'
    },

    {
      id: 3,
      senderId: 2,
      receiverId: 1,
      senderName: 'Kevin Mwangi',
      message: 'How is the FinChat project progressing?',
      time: '09:13',
      mine: false,
      status: 'Read'
    }

  ];

  // ==========================================
  // GETTERS
  // ==========================================

  getConversations(): Conversation[] {

    return this.conversations;

  }

  getMessages(): ChatMessage[] {

    return this.messages;

  }

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  sendMessage(message: ChatMessage): void {

    this.messages.push(message);

  }

  // ==========================================
  // DELETE MESSAGE
  // ==========================================

  deleteMessage(id: number): void {

    this.messages = this.messages.filter(

      message => message.id !== id

    );

  }

  // ==========================================
  // EDIT MESSAGE
  // ==========================================

  editMessage(
    id: number,
    newMessage: string
  ): void {

    const message = this.messages.find(

      message => message.id === id

    );

    if (message) {

      message.message = newMessage;

    }

  }

  // ==========================================
  // MARK AS READ
  // ==========================================

  markAsRead(id: number): void {

    const conversation = this.conversations.find(

      conversation => conversation.id === id

    );

    if (conversation) {

      conversation.unread = 0;

    }

  }

}