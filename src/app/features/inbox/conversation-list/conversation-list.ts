import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChatService } from '../services/chat.service';
import { Conversation } from '../models/conversation';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './conversation-list.html',
  styleUrls: ['./conversation-list.scss']
})
export class ConversationListComponent implements OnInit {

  conversations: Conversation[] = [];

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit(): void {

    this.conversations =
      this.chatService.getConversations();

  }

}