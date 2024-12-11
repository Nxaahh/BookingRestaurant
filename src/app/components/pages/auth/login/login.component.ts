import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FooterComponent} from '../../../footer/footer.component';
import {BookingFormComponent} from '../../../booking/booking-form/booking-form.component';
import {HeaderComponent} from '../../../header/header.component';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FooterComponent, BookingFormComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registroForm:FormGroup;

  constructor(public fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.registroForm = fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.min(6)]]
    })
  }

  onSubmit() {
    this.authService.login(this.registroForm.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/bookings']);
      })
    .catch(err => console.log(err));
  }

  onClick(){
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/bookings']);

      })
      .catch(err => console.log(err));
  }

}
