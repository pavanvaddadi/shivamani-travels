import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CarCardComponent } from '../../shared/components/car-card/car-card.component';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { Observable } from 'rxjs';

export interface Car {
  id: number;
  image: string;
  name: string;
  type: string;
  seats: number;
  hasAc: boolean;
  price?: string;
  description?: string;
  suitableFor?: string;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CarCardComponent, AppHeaderComponent],
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[]> | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cars$ = this.http.get<Car[]>('assets/data/cars.json');
  }
}
