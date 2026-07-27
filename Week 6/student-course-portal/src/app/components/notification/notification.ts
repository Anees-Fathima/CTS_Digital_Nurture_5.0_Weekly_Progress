import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,

  // Providing NotificationService here creates a new instance
  // for this component and its child components only.
  // Other components receive different instances.

  providers: [
    NotificationService
  ],

  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {}
