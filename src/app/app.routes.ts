import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'trips',
    loadComponent: () => import('./features/trips/trips.component').then((m) => m.TripsComponent),
  },
  {
    path: 'booking',
    loadComponent: () => import('./features/booking/booking.component').then((m) => m.BookingComponent),
  },
  {
    path: 'cars',
    loadComponent: () => import('./features/cars/cars.component').then((m) => m.CarsComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
];
