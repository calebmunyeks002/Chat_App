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
import { Conversation } from '../models/conversation';

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

  // ======================================
  // CURRENT CHAT USER
  // ======================================

  chatUser: Conversation = {

    id: 1,

    name: '',

    avatar: '',

    online: false,

    unread: 0,

    lastMessage: '',

    lastTime: ''

  };

  // ======================================
  // MESSAGE INPUT
  // ======================================

  newMessage = '';

  searchText = '';

  selectedImage: string | null = null;

  editingMessageId: number | null = null;

  // ======================================
  // EMOJIS
  // ======================================

  emojis = [

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

  // ======================================
  // CHAT MESSAGES
  // ======================================

  messages: ChatMessage[] = [];

  // ======================================
  // INITIALIZE
  // ======================================

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const conversation =
      this.chatService.getConversation(id);

    if (conversation) {

      this.chatUser = {

        ...conversation

      };

    }

    this.loadMessages();

  }

  private loadMessages(): void {

    this.messages =
      this.chatService.getMessages(
        this.chatUser.id
      );

  }

  // ======================================
  // AUTO SCROLL
  // ======================================

  ngAfterViewChecked(): void {

    this.scrollToBottom();

  }

  scrollToBottom(): void {

    try {

      this.scrollContainer.nativeElement.scrollTop =
      this.scrollContainer.nativeElement.scrollHeight;

    } catch {}

  }

  // ======================================
  // BACK
  // ======================================

  goBack(): void {

    this.router.navigate([
      '/dashboard/inbox'
    ]);

  }

  // ======================================
  // FILTERED MESSAGES
  // ======================================

  get filteredMessages(): ChatMessage[] {

    return this.messages.filter(message =>

      message.message
      .toLowerCase()
      .includes(
        this.searchText.toLowerCase()
      )

    );

  }

  // ======================================
  // TYPING
  // ======================================

  onTyping(): void {

    this.chatUser.online = true;

  }

  // ======================================
  // SEND MESSAGE
  // ======================================

  sendMessage(): void {

    if (

      this.newMessage.trim() === '' &&
      !this.selectedImage

    ) {

      return;

    }

    // -----------------------------
    // EDIT MESSAGE
    // -----------------------------

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

    // -----------------------------
    // NEW MESSAGE
    // -----------------------------

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

    // Update status automatically

    setTimeout(() => {

      message.status = 'Delivered';

    }, 1000);

    setTimeout(() => {

      message.status = 'Read';

    }, 2500);

    // Simulate reply

    this.simulateReply();

  }

  // ======================================
  // AUTO REPLY
  // ======================================

  simulateReply(): void {

    this.chatUser.online = true;

    const replies = [

      "That's great 😊",

      "Okay 👍",

      "See you later.",

      "Perfect!",

      "I have received your message.",

      "Let's discuss tomorrow.",

      "Awesome work 👏",

      "Sure."

    ];

    const randomReply =

      replies[
        Math.floor(Math.random() * replies.length)
      ];

    setTimeout(() => {

      const reply: ChatMessage = {

        id: Date.now() + 1,

        senderId: this.chatUser.id,

        receiverId: 1,

        senderName: this.chatUser.name,

        message: randomReply,

        time: new Date().toLocaleTimeString([], {

          hour: '2-digit',

          minute: '2-digit'

        }),

        mine: false,

        status: 'Read'

      };

      this.chatService.sendMessage(reply);

      this.loadMessages();

    }, 2500);

  }

  // ======================================
  // IMAGE
  // ======================================

  onImageSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (

      !input.files ||
      input.files.length === 0

    ) {

      return;

    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.selectedImage =
        reader.result as string;

    };

    reader.readAsDataURL(file);

  }

  removeSelectedImage(): void {

    this.selectedImage = null;

  }

  // ======================================
  // EMOJI
  // ======================================

  addEmoji(emoji: string): void {

    this.newMessage += emoji;

  }

  // ======================================
  // REACTION
  // ======================================

  react(

    message: ChatMessage,

    emoji: string

  ): void {

    message.reaction = emoji;

  }

  // ======================================
  // DELETE
  // ======================================

  deleteMessage(id: number): void {

    this.chatService.deleteMessage(id);

    this.loadMessages();

  }

  // ======================================
  // EDIT
  // ======================================

  editMessage(message: ChatMessage): void {

    this.newMessage = message.message;

    this.editingMessageId = message.id;

  }

  // ======================================
  // PLACEHOLDERS
  // ======================================

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