import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TripCardComponent } from '../../shared/components/trip-card/trip-card.component';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APP_CONFIG } from '../../core/config/constants';

export interface Trip {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
}

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TripCardComponent, AppHeaderComponent],
})
export class TripsComponent implements OnInit {
  trips$: Observable<Trip[]> | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.trips$ = this.http.get<Trip[]>('assets/data/packages.json').pipe(
      catchError(() => of([]))
    );
  }

  openWhatsApp() {
    const phoneNumber = APP_CONFIG.whatsappNumber;
    const message = 'Hello Shivamani Travels, I would like to book a trip.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
