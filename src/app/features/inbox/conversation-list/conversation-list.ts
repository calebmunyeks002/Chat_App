import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { Conversation } from '../models/conversation';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './conversation-list.html',
  styleUrls: ['./conversation-list.scss']
})
export class ConversationListComponent
implements OnInit, OnDestroy {

  conversations: Conversation[] = [];

  private subscription!: Subscription;

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.subscription =
      this.chatService
        .getConversations()
        .subscribe(conversations => {

          this.conversations = conversations;

        });

  }

  openConversation(conversation: Conversation): void {

    this.router.navigate([
      '/dashboard/private-chat',
      conversation.id
    ]);

  }

  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe();

    }

  }

}