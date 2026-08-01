import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripCardComponent } from '../../shared/components/trip-card/trip-card.component';
import { CarCardComponent } from '../../shared/components/car-card/car-card.component';
import { SearchCardComponent } from '../../shared/components/search-card/search-card.component';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { APP_CONFIG } from '../../core/config/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, TripCardComponent, CarCardComponent, SearchCardComponent, AppHeaderComponent],
})
export class HomeComponent implements OnInit {
  weddingServices$: Observable<any[]> | null = null;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.weddingServices$ = this.http.get<any[]>('assets/data/services.json');
  }

  popularDestinations = [
    { image: 'assets/images/vizag.jpg', title: 'Visakhapatnam', subtitle: 'City of Destiny', price: '₹1200/day' },
    { image: 'assets/images/araku.jpg', title: 'Araku Valley', subtitle: 'Nature & Hills', price: '₹1500/day' },
    { image: 'assets/images/srikakulam.jpg', title: 'Srikakulam', subtitle: 'Heritage & Temples', price: '₹1000/day' }
  ];

  featuredCars = [
    { image: 'assets/images/innova.jpg', name: 'Toyota Innova', type: 'SUV', seats: 7, hasAc: true, price: '₹16/km', suitableFor: 'Long Tours', description: 'The trusted choice for long journeys with unparalleled comfort.' },
    { image: 'assets/images/swift.jpg', name: 'Maruti Swift Dzire', type: 'Sedan', seats: 4, hasAc: true, price: '₹11/km', suitableFor: 'Local & Airport Drop', description: 'Comfortable and budget-friendly sedan, ideal for small families.' }
  ];

  tourPackages = [
    { image: 'assets/images/airport.jpg', title: 'Airport Pickup & Drop', subtitle: 'Round Trip Services', price: 'From ₹1500', description: 'Complete transportation solution for your arrival and departure.' },
    { image: 'assets/images/srikakulam.jpg', title: 'Rajahmundry Tour', subtitle: 'Godavari & Heritage', price: '₹4500', description: 'Explore the scenic beauty of Rajahmundry, Godavari river, and rich cultural heritage.' }
  ];

  openWhatsApp() {
    const phoneNumber = APP_CONFIG.whatsappNumber;
    const message = 'Hello Shivamani Travels, I would like to book a trip.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }
}

