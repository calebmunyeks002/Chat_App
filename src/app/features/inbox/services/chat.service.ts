import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../models/chat-message';
import { Conversation } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // ============================================
  // CONVERSATIONS
  // ============================================

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
  private conversationsSubject =
  new BehaviorSubject<Conversation[]>(this.conversations);

conversations$ =
  this.conversationsSubject.asObservable();

  // ============================================
  // CHAT MESSAGES
  // ============================================

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

  // ============================================
  // AUTOMATIC REPLIES
  // ============================================

  private autoReplies: string[] = [

    'Hello Caleb 👋',

    'That sounds great!',

    'Nice work 👍',

    'Perfect.',

    'I completely agree.',

    'Thank you for the update.',

    'See you shortly.',

    'Okay 😊',

    'No problem.',

    'Let us discuss it tomorrow.',

    'Can you explain further?',

    'Awesome!'

  ];

  // ============================================
  // TYPING STATUS
  // ============================================

  private typing = false;

  isTyping(): boolean {

    return this.typing;

  }

  startTyping(): void {

    this.typing = true;

  }

  stopTyping(): void {

    this.typing = false;

  }

  // ============================================
  // RANDOM REPLY
  // ============================================

  private getRandomReply(): string {

    const index = Math.floor(

      Math.random() * this.autoReplies.length

    );

    return this.autoReplies[index];

  }

  // ============================================
  // CONVERSATIONS
  // ============================================

  getConversations() {

    return this.conversations$;

}
  getConversation(id: number): Conversation | undefined {

    return this.conversations.find(

      conversation => conversation.id === id

    );

  }

  // ============================================
  // MESSAGES
  // ============================================

  getMessages(userId?: number): ChatMessage[] {

    if (!userId) {

      return this.messages;

    }

    return this.messages.filter(message =>

      message.senderId === userId ||

      message.receiverId === userId

    );

  }

  // ============================================
  // SEND MESSAGE
  // ============================================

  sendMessage(message: ChatMessage): void {

    this.messages.push(message);

    const conversation = this.conversations.find(

      conversation => conversation.id === message.receiverId

    );

    if (conversation) {

    conversation.lastMessage = message.message;

    conversation.lastTime = message.time;

}

this.conversationsSubject.next(
    [...this.conversations]
);

    // Simulate message status

    setTimeout(() => {

      message.status = 'Delivered';

    }, 1000);

    setTimeout(() => {

      message.status = 'Read';

    }, 2500);

  }

  // ============================================
  // AUTOMATIC REPLY
  // ============================================

  simulateReply(receiverId: number): void {

    const conversation = this.getConversation(receiverId);

    if (!conversation) {

      return;

    }

    // Show typing indicator

    this.startTyping();

    setTimeout(() => {

      this.stopTyping();

      const replyText = this.getRandomReply();

      const reply: ChatMessage = {

        id: Date.now(),

        senderId: receiverId,

        receiverId: 1,

        senderName: conversation.name,

        message: replyText,

        time: new Date().toLocaleTimeString([], {

          hour: '2-digit',

          minute: '2-digit'

        }),

        mine: false,

        status: 'Read'

      };

      this.messages.push(reply);

      conversation.lastMessage = reply.message;

      conversation.lastTime = reply.time;

      conversation.unread++;

    }, 2500);

  }

  // ============================================
  // EDIT MESSAGE
  // ============================================

  editMessage(id: number, text: string): void {

    const message = this.messages.find(

      message => message.id === id

    );
    this.conversationsSubject.next(
    [...this.conversations]
);

    if (message) {

      message.message = text;

    }

  }

  // ============================================
  // DELETE MESSAGE
  // ============================================

  deleteMessage(id:number){

    this.messages =
        this.messages.filter(
            message => message.id !== id
        );

    this.conversationsSubject.next(
        [...this.conversations]
    );

  }

  // ============================================
  // MARK CONVERSATION AS READ
  // ============================================

  markConversationAsRead(id: number): void {

    const conversation = this.getConversation(id);

    if (conversation) {

      conversation.unread = 0;

    }

  }

}