import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message';

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

export class PrivateChatComponent
implements OnInit, AfterViewChecked {

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLDivElement>;

  constructor(
  private router: Router,
  private route: ActivatedRoute,
  private chatService: ChatService
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

  messages: ChatMessage[] = [];

  // ==========================
  // INITIALIZATION
  // ==========================

  ngOnInit(): void {

  const id = Number(
    this.route.snapshot.paramMap.get('id')
  );

  const conversation =
    this.chatService.getConversation(id);

  if (conversation) {

    this.chatUser = {

      id: conversation.id,

      name: conversation.name,

      online: conversation.online,

      typing: false,

      avatar: conversation.avatar

    };

  }

  this.loadMessages();

}

  private loadMessages(): void {

  this.messages =
    this.chatService.getMessages(this.chatUser.id);

}

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
        .includes(this.searchText.toLowerCase())

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

    // Editing an existing message
    if (this.editingMessageId !== null) {

      this.chatService.editMessage(

        this.editingMessageId,

        this.newMessage

      );

      this.loadMessages();

      this.editingMessageId = null;

      this.newMessage = '';

      this.selectedImage = null;

      return;

    }

    const message: ChatMessage = {

      id: Date.now(),

      senderId: 1,

      receiverId: this.chatUser.id,

      senderName: 'Me',

      message: this.newMessage,

      image: this.selectedImage || undefined,

      time: new Date().toLocaleTimeString([], {

        hour: '2-digit',

        minute: '2-digit'

      }),

      mine: true,

      status: 'Sent'

    };

    this.chatService.sendMessage(message);

    this.loadMessages();

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

    this.chatService.deleteMessage(id);

    this.loadMessages();

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