import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent implements OnInit{
  bookings: Booking[]=[]

  constructor(private bookingService: BookingService, private router: Router ){}
  ngOnInit(): void {
      this.bookings=this.bookingService.getAllBookings()
  }

  eliminarReserva(id:number){
    this.bookingService.delete(id)
  }
  editarReserva(id:number){
    this.router.navigate([`/edit/${id}`]);
  }


}
