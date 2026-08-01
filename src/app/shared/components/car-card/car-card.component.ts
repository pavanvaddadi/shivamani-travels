import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class CarCardComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() seats: number = 4;
  @Input() hasAc: boolean = true;
  @Input() price?: string;
  @Input() description?: string;
  @Input() suitableFor?: string;
}
