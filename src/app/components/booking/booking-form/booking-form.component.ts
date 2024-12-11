import { BookingService } from './../../../services/booking.service';
import { Component } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {

 // newBooking : Booking | null = null;
  registroForm:FormGroup;
  booking: Booking | null = null;
  editingId: number = -1;

 constructor(private bookingService: BookingService, formBuilder: FormBuilder, private route:ActivatedRoute){
  this.registroForm = formBuilder.group({
    'client': ['', [Validators.required, Validators.minLength(1),Validators.maxLength(50)]],
    'phone': ['', [Validators.required]],
    'email': ['', [Validators.required,]],
    'persons' : ['',[Validators.min(1),Validators.max(50)]],
    'notes':['',[Validators.maxLength(250)]],
    'date':['',Validators.required]
  });
 }

 newUser: { client:string,phone:string,email:string,persons:number,notes:string,datetimeBooking:string} = {
  client: '',
  phone: '',
  email: '',
  persons: 0,
  notes:'',
  datetimeBooking: ''
  };



 onSubmit() {
  this.booking = this.bookingService.getBookingById(this.editingId);
  if (this.registroForm.valid){
    if (this.booking!=null) {
      this.booking.client = this.newUser.client
      this.booking.phone = this.newUser.phone
      this.booking.email = this.newUser.email
      this.booking.persons = this.newUser.persons
      this.booking.notes = this.newUser.notes
      this.booking.date = new Date(this.newUser.datetimeBooking)
      this.bookingService.editar(this.booking)
    }else{

        const newPerson = this.bookingService.addBookingPerson(this.newUser.client, this.newUser.phone, this.newUser.email, this.newUser.persons, this.newUser.notes, new Date(this.newUser.datetimeBooking));

    }
  }
    this.newUser = { client: '', phone: '',email: '', persons:0, notes:'', datetimeBooking:''};
 }

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
      console.log(id)
      this.booking = this.bookingService.getBookingById(id);
      if(this.booking !=null){
        this.newUser.client = this.booking.client
        this.newUser.phone = this.booking.phone
        this.newUser.email = this.booking.email
        this.newUser.persons = this.booking.persons
        this.newUser.notes = this.booking.notes
        this.newUser.datetimeBooking = this.booking.getDateForm()
        this.editingId = id;
      }
  });
}

}
