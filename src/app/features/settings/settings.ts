import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent {

  theme = 'System';

  fontSize = 'Medium';

  username = 'caleb01';

  email = 'caleb@example.com';

  phone = '+254712345678';

  pushNotifications = true;

  emailNotifications = true;

  soundNotifications = true;

  lastSeenVisible = true;

  profileVisible = true;

  constructor(private router: Router) {}

  saveSettings() {
    alert('Settings saved successfully!');
  }

  reportRoom() {
    alert('Report Room dialog will be implemented.');
  }

  changePassword() {
    alert('Change Password dialog will be implemented.');
  }

  logout() {

    sessionStorage.clear();

    this.router.navigate(['/']);

  }

}