import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Conversation{

id:number;

name:string;

lastMessage:string;

time:string;

online:boolean;

unread:number;

avatar:string;

}

@Component({
selector:'app-conversation-list',
standalone:true,
imports:[CommonModule, RouterLink],
templateUrl:'./conversation-list.html',
styleUrls:['./conversation-list.scss']
})

export class ConversationListComponent{

conversations:Conversation[]=[

{
id:1,
name:'Alice',
lastMessage:'Hey Caleb, how are you?',
time:'09:15',
online:true,
unread:2,
avatar:'https://i.pravatar.cc/100?img=1'
},

{
id:2,
name:'Kevin',
lastMessage:'Deployment completed.',
time:'08:30',
online:true,
unread:0,
avatar:'https://i.pravatar.cc/100?img=5'
},

{
id:3,
name:'Mercy',
lastMessage:'See you tomorrow.',
time:'Yesterday',
online:false,
unread:5,
avatar:'https://i.pravatar.cc/100?img=12'
},

{
id:4,
name:'Brian',
lastMessage:'Thank you.',
time:'Yesterday',
online:true,
unread:1,
avatar:'https://i.pravatar.cc/100?img=15'
}

];

}