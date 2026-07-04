import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ChatMessage {

  id: number;
  sender: string;
  message: string;
  time: string;
  mine: boolean;
  status: 'Sent' | 'Delivered' | 'Read';
  reaction?: string;
  image?: string;

}

@Component({
  selector: 'app-private-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './private-chat.html',
  styleUrls: ['./private-chat.scss']
})

export class PrivateChatComponent implements AfterViewChecked {

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router
  ) {}

  // ==========================
  // USER INFORMATION
  // ==========================

  chatUser = {

    id: 1,

    name: 'Kevin Mwangi',

    online: true,

    typing: false,

    avatar:
      'https://i.pravatar.cc/150?img=5'

  };

  // ==========================
  // MESSAGE INPUT
  // ==========================

  newMessage = '';

  searchText = '';

  selectedImage: string | null = null;

  editingMessageId: number | null = null;

  // ==========================
  // AVAILABLE EMOJIS
  // ==========================

  emojis: string[] = [
  '😀',
  '😁',
  '😂',
  '🤣',
  '😍',
  '😎',
  '🥳',
  '👍',
  '👏',
  '🔥',
  '❤️',
  '🎉'
];

  // ==========================
  // CHAT HISTORY
  // ==========================

  messages: ChatMessage[] = [

    {
      id: 1,
      sender: 'Kevin',
      message: 'Hello Caleb 👋',
      time: '09:10',
      mine: false,
      status: 'Read'
    },

    {
      id: 2,
      sender: 'Me',
      message: 'Hello Kevin!',
      time: '09:11',
      mine: true,
      status: 'Read'
    },

    {
      id: 3,
      sender: 'Kevin',
      message: 'How is the FinChat project progressing?',
      time: '09:13',
      mine: false,
      status: 'Read'
    },

    {
      id: 4,
      sender: 'Me',
      message: 'Very well. We have completed the dashboard and inbox.',
      time: '09:15',
      mine: true,
      status: 'Delivered'
    }

  ];

  // ==========================
  // AUTO SCROLL
  // ==========================

  ngAfterViewChecked(): void {

    this.scrollToBottom();

  }

  scrollToBottom(): void {

    try {

      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;

    } catch {}

  }

  // ==========================
  // BACK TO INBOX
  // ==========================

  goBack(): void {

    this.router.navigate([
      '/dashboard/inbox'
    ]);

  }

  // ==========================
  // SEARCH
  // ==========================

  get filteredMessages(): ChatMessage[] {

    return this.messages.filter(message =>

      message.message
        .toLowerCase()
        .includes(
          this.searchText.toLowerCase()
        )

    );

  }

  // ==========================
  // TYPING
  // ==========================

  onTyping(): void {

    this.chatUser.typing = true;

    setTimeout(() => {

      this.chatUser.typing = false;

    }, 1200);

  }

  // ==========================
  // SEND MESSAGE
  // ==========================

  sendMessage(): void {

    if (
      this.newMessage.trim() === '' &&
      !this.selectedImage
    ) {

      return;

    }

    if (this.editingMessageId !== null) {

      const message = this.messages.find(

        m => m.id === this.editingMessageId

      );

      if (message) {

        message.message = this.newMessage;

      }

      this.editingMessageId = null;

      this.newMessage = '';

      this.selectedImage = null;

      return;

    }

    this.messages.push({

      id: this.messages.length + 1,

      sender: 'Me',

      message: this.newMessage,

      image: this.selectedImage || undefined,

      time: new Date().toLocaleTimeString([], {

        hour: '2-digit',

        minute: '2-digit'

      }),

      mine: true,

      status: 'Sent'

    });

    this.newMessage = '';

    this.selectedImage = null;

  }

  // ==========================
  // IMAGE ATTACHMENT
  // ==========================

  onImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      return;

    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.selectedImage = reader.result as string;

    };

    reader.readAsDataURL(file);

  }

  removeSelectedImage(): void {

    this.selectedImage = null;

  }

  // ==========================
  // EMOJIS
  // ==========================

  addEmoji(emoji: string): void {

    this.newMessage += emoji;

  }

  // ==========================
  // REACTIONS
  // ==========================

  react(
    message: ChatMessage,
    emoji: string
  ): void {

    message.reaction = emoji;

  }

  // ==========================
  // DELETE MESSAGE
  // ==========================

  deleteMessage(id: number): void {

    this.messages = this.messages.filter(

      message => message.id !== id

    );

  }

  // ==========================
  // EDIT MESSAGE
  // ==========================

  editMessage(message: ChatMessage): void {

    this.newMessage = message.message;

    this.editingMessageId = message.id;

  }

  // ==========================
  // PLACEHOLDER FEATURES
  // ==========================

  startVoiceCall(): void {

    alert('Voice calling will be implemented in Module 15.');

  }

  startVideoCall(): void {

    alert('Video calling will be implemented in Module 15.');

  }

  openMoreMenu(): void {

    alert('More options coming soon.');

  }

}