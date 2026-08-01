import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { APP_CONFIG } from '../../core/config/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, AppHeaderComponent],
})
export class ContactComponent {
  contactForm: FormGroup;
  primaryContact = APP_CONFIG.primaryContact;
  secondaryContact = APP_CONFIG.secondaryContact;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      const phoneNumber = APP_CONFIG.whatsappNumber;
      const text = `*New Contact Inquiry*%0A%0A*Name:* ${formValue.name}%0A*Email:* ${formValue.email}%0A*Message:* ${formValue.message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(whatsappUrl, '_blank');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
