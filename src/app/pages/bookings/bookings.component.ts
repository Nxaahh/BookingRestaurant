import { BookingResumeComponent } from './../../components/booking/booking-resume/booking-resume.component';
import { BookingService } from './../../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent  {




}
