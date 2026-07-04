import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ChatRoom {

  id:number;

  name:string;

  category:string;

  members:number;

  online:number;

  description:string;

  privacy:string;

}

@Component({
  selector:'app-discover-rooms',
  standalone:true,
  imports:[
    CommonModule, RouterLink
  ],
  templateUrl:'./discover-rooms.html',
  styleUrls:['./discover-rooms.scss']
})
export class DiscoverRoomsComponent{

  searchText='';

  rooms:ChatRoom[]=[

    {
      id:1,
      name:'FinTech Kenya',
      category:'Finance',
      members:458,
      online:81,
      privacy:'Public',
      description:'Discuss digital banking, payments and innovation.'
    },

    {
      id:2,
      name:'Angular Developers',
      category:'Programming',
      members:850,
      online:154,
      privacy:'Public',
      description:'Everything Angular from beginner to enterprise.'
    },

    {
      id:3,
      name:'Spring Boot Experts',
      category:'Backend',
      members:622,
      online:97,
      privacy:'Public',
      description:'Java, Spring Boot and Microservices.'
    },

    {
      id:4,
      name:'Cyber Security',
      category:'Security',
      members:712,
      online:134,
      privacy:'Private',
      description:'Threat detection and ethical hacking.'
    },

    {
      id:5,
      name:'Cloud Engineers',
      category:'Cloud',
      members:480,
      online:66,
      privacy:'Public',
      description:'AWS Azure Google Cloud discussions.'
    }

  ];

  joinRoom(room:ChatRoom){

    alert(`Joining ${room.name}`);

  }

}