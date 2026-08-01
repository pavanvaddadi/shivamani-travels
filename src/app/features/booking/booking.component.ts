import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { APP_CONFIG } from '../../core/config/constants';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, AppHeaderComponent],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  minDate: string;
  selectedItem: string = '';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    const today = new Date();
    this.minDate = today.toISOString();
    
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pickup: ['', Validators.required],
      destination: ['', Validators.required],
      pickupDate: [this.minDate, Validators.required],
      pickupTime: [this.minDate, Validators.required],
      passengers: ['1', Validators.required],
      notes: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        this.selectedItem = params['item'];
      }
    });
  }

  onBookNow() {
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.value;
      
      const dateObj = new Date(formValue.pickupDate);
      const formattedDate = dateObj.toLocaleDateString();
      const timeObj = new Date(formValue.pickupTime);
      const formattedTime = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const phoneNumber = APP_CONFIG.whatsappNumber;
      
      let message = `*New Booking Request*%0A%0A`;
      if (this.selectedItem) {
        message += `*Selected Item:* ${this.selectedItem}%0A`;
      }
      
      message += `*Name:* ${formValue.name}%0A` +
        `*Mobile:* ${formValue.mobile}%0A` +
        `*Pickup:* ${formValue.pickup}%0A` +
        `*Destination:* ${formValue.destination}%0A` +
        `*Date:* ${formattedDate}%0A` +
        `*Time:* ${formattedTime}%0A` +
        `*Passengers:* ${formValue.passengers}`;
        
      if (formValue.notes) {
        message += `%0A*Notes:* ${formValue.notes}`;
      }
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}
