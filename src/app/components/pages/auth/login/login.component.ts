import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {FooterComponent} from '../../../footer/footer.component';
import {BookingFormComponent} from '../../../booking/booking-form/booking-form.component';
import {HeaderComponent} from '../../../header/header.component';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FooterComponent, BookingFormComponent, HeaderComponent, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private userService:AuthService, private router:Router) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit(): void {
    this.userService.login(this.registroForm.value)
      .then(response=>{
          console.log(response)
        }
      )
      .catch(error=> console.log(error))
  }

  onClick(){
    this.userService.loginWithGoogle()
      .then(response=>{
        console.log(response)
        this.router.navigate(['/home']);
      })
      .catch(error=>console.log(error));
  }
}
