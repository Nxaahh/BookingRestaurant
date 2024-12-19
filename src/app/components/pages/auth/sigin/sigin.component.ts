import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {BookingFormComponent} from '../../../booking/booking-form/booking-form.component';
import {HeaderComponent} from '../../../header/header.component';
import {FooterComponent} from '../../../footer/footer.component';
import {AuthService} from '../../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, BookingFormComponent, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {

  registroForm:FormGroup;

  constructor(private userService: AuthService, formBuilder: FormBuilder, private route:ActivatedRoute, private router:Router){
    this.registroForm = formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password' : ['', [Validators.required, Validators.minLength(6)]],
    });
    //  this.registroForm = new FormGroup({
    //   email:new FormControl(),
    //   password: new FormControl()
//})
  }

  onSubmit(){
    this.userService.register(this.registroForm.value)
      .then(response=>{
        console.log(response);
        this.router.navigate(['/login'])
      })
      .catch(error=>console.log(error));
  }

}
