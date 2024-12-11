import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {BookingFormComponent} from '../../../booking/booking-form/booking-form.component';
import {HeaderComponent} from '../../../header/header.component';
import {FooterComponent} from '../../../footer/footer.component';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, BookingFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
  registroForm:FormGroup;

  constructor(public fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registroForm = fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit(){
    this.authService.register(this.registroForm.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['login']);
      })
      .catch(err => console.log(err));
  }
}
