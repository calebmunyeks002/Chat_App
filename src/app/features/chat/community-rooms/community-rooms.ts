import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Community {

  id:number;

  name:string;

  description:string;

  category:string;

  members:number;

  online:number;

  rooms:number;

  rating:number;

  featured:boolean;

  image:string;

}

@Component({
  selector:'app-community-rooms',
  standalone:true,
  imports:[
    CommonModule, RouterLink
  ],
  templateUrl:'./community-rooms.html',
  styleUrls:['./community-rooms.scss']
})
export class CommunityRoomsComponent{

  communities:Community[]=[

    {
      id:1,
      name:'FinTech Africa',
      description:'Banking, Digital Payments, Mobile Money and Innovation.',
      category:'Finance',
      members:15420,
      online:863,
      rooms:45,
      rating:4.9,
      featured:true,
      image:'https://picsum.photos/400/220?random=1'
    },

    {
      id:2,
      name:'AI Community',
      description:'Artificial Intelligence, Machine Learning and Robotics.',
      category:'Technology',
      members:10250,
      online:624,
      rooms:61,
      rating:4.8,
      featured:true,
      image:'https://picsum.photos/400/220?random=2'
    },

    {
      id:3,
      name:'Cloud Engineers',
      description:'AWS, Azure, Google Cloud and DevOps.',
      category:'Cloud',
      members:8240,
      online:421,
      rooms:37,
      rating:4.7,
      featured:false,
      image:'https://picsum.photos/400/220?random=3'
    },

    {
      id:4,
      name:'Cyber Security',
      description:'Security Operations, Ethical Hacking and Digital Forensics.',
      category:'Security',
      members:9680,
      online:598,
      rooms:50,
      rating:4.8,
      featured:false,
      image:'https://picsum.photos/400/220?random=4'
    }

  ];

  joinCommunity(name:string){

    alert("Joined " + name);

  }

}