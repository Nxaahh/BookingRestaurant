import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { BookingResumeComponent } from '../../booking/booking-resume/booking-resume.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,BookingResumeComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

}
