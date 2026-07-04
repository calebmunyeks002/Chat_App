import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {

  id:number;

  title:string;

  message:string;

  time:string;

  type:string;

  read:boolean;

}

@Component({

selector:'app-notifications',

standalone:true,

imports:[
CommonModule
],

templateUrl:'./notifications.html',

styleUrls:['./notifications.scss']

})

export class NotificationsComponent{

notifications:Notification[]=[

{

id:1,

title:'New Message',

message:'Brian sent a message in FinTech Kenya.',

time:'2 mins ago',

type:'message',

read:false

},

{

id:2,

title:'Room Created',

message:'AI Developers room has been created.',

time:'20 mins ago',

type:'room',

read:false

},

{

id:3,

title:'Trending',

message:'Cyber Security community is trending.',

time:'1 hour ago',

type:'trend',

read:true

},

{

id:4,

title:'Login',

message:'You signed in successfully.',

time:'Today',

type:'account',

read:true

}

];

markAsRead(notification:Notification){

notification.read=true;

}

markAllRead(){

this.notifications.forEach(n=>n.read=true);

}

deleteNotification(notification:Notification){

this.notifications=this.notifications.filter(

n=>n.id!==notification.id

);

}

}