import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}