import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SearchResult{

title:string;

subtitle:string;

type:string;

}

@Component({

selector:'app-search',

standalone:true,

imports:[
CommonModule,
FormsModule
],

templateUrl:'./search.html',

styleUrls:['./search.scss']

})

export class SearchComponent{

searchText='';

selectedFilter='All';

filters=[
'All',
'Rooms',
'Communities',
'Users',
'Messages'
];

results: SearchResult[] = [

{
title:'FinTech Kenya',
subtitle:'Public Room • Finance',
type:'Rooms'
},

{
title:'Angular Developers',
subtitle:'Programming Community',
type:'Communities'
},

{
title:'Caleb',
subtitle:'Online User',
type:'Users'
},

{
title:'Deployment begins at 2 PM',
subtitle:'Message from Brian',
type:'Messages'
},

{
title:'Cyber Security',
subtitle:'Trending Community',
type:'Communities'
}

];

get filteredResults(){

return this.results.filter(result=>{

const matchesSearch=

result.title.toLowerCase().includes(this.searchText.toLowerCase()) ||

result.subtitle.toLowerCase().includes(this.searchText.toLowerCase());

const matchesFilter=

this.selectedFilter==='All' ||

result.type===this.selectedFilter;

return matchesSearch && matchesFilter;

});

}

openResult(result:SearchResult){

alert("Opening "+result.title);

}

}