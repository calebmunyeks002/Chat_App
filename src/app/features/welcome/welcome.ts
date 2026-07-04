import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.scss']
})
export class WelcomeComponent {

  constructor(private router: Router){}

  signIn(){
    this.router.navigate(['/login']);
  }

  signUp(){
    this.router.navigate(['/register']);
  }

}