import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversationListComponent } from '../conversation-list/conversation-list';

@Component({
selector:'app-inbox',
standalone:true,
imports:[
CommonModule,
FormsModule,
ConversationListComponent
],
templateUrl:'./inbox.html',
styleUrls:['./inbox.scss']
})

export class InboxComponent{

search='';

}