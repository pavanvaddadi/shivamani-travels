import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { APP_CONFIG } from '../../../core/config/constants';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class AppHeaderComponent {
  @Input() pageTitle?: string;
  @Input() backHref?: string;
  
  primaryContact = APP_CONFIG.primaryContact;
  secondaryContact = APP_CONFIG.secondaryContact;
  brandName = APP_CONFIG.brandName;
}
