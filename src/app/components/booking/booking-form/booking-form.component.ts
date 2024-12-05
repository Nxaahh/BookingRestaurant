import { Component, NgModule, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {


  newBooking: { cliente: string, phone: string, email: string,notes:string} = {
    cliente: '',
    phone: '',
    email: '',
    notes: '',
  };

  // Este objeto capturará los datos del formulario
  registroForm:FormGroup;
  editingId: number = -1;
  booking: Booking | null = null;



  constructor(private bookingService: BookingService,formBuilder: FormBuilder, private route : ActivatedRoute) {
    this.registroForm = formBuilder.group({ 
      'cliente': ['', [Validators.required, Validators.maxLength(50)]],
      'phone': ['', [Validators.required, Validators.maxLength(255)]],
      'email': ['', [Validators.required, Validators.maxLength(255)]],
      'persons': ['', [Validators.required, Validators.maxLength(255)]],
      'notes': ['', [Validators.required, Validators.maxLength(255)]],
      'date': ['', [Validators.required, Validators.maxLength(255)]],




    });
    
    
  }
  // Este método se ejecutará cuando se envíe el formulario
  onSubmit() {

    this.booking = this.bookingService.getPersonByID(this.editingId);

    if (this.booking!=null) {
      this.booking.client = this.newBooking.cliente
      this.booking.phone = this.newBooking.phone
      this.booking.email = this.newBooking.email
      this.booking.notes = this.newBooking.notes
  
      this.bookingService.editarReserva(this.booking);
    }else{
    //  const newBooking = this.bookingService.addBooking(this.newBooking,this.newBooking.cliente, this.newBooking.phone, this.newBooking.email,this.newBooking);
      // Opcional: Mostrar el ID generado y otros detalles en la consola
    
    }

    // Limpiar el formulario si es necesario
    this.newBooking = { cliente: '',
      phone: '',
      email: '',
      notes: '', };
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.booking = this.bookingService.getPersonByID(id); // Usa el ID para obtener la persona
      if(this.booking !=null){
        this.newBooking.cliente = this.booking.client
        this.newBooking.phone = this.booking.phone
        this.newBooking.email = this.booking.email
        this.newBooking.notes = this.booking.email
        this.editingId = id;
      }
    });
  }





  
}
