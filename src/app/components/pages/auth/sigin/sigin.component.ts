import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {HeaderComponent} from '../../../header/header.component';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {Person, RoleType} from '../../../../models/persons.model';
import {PersonService} from '../../../../services/persons.service';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HeaderComponent, NgClass],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {

  registroForm: FormGroup;

  constructor(private userService: AuthService, formBuilder: FormBuilder, private router: Router, private personsService: PersonService) {
    this.registroForm = formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'isAdmin': ['', []],
    });
  }


  onSubmit() {
    if (this.registroForm.valid) {


      this.userService.register(this.registroForm.value)
        .then(response => {
          let person: Person = new Person(
            response.user.uid,
            this.registroForm.get('name')?.value,
            this.registroForm.get('surname')?.value,
            this.registroForm.get('email')?.value,
            this.registroForm.get('isAdmin')?.value ? RoleType.ADMIN : RoleType.USER,
            new Date().toString()
          );

          console.log(person);

          this.personsService.savePerson(person)
            .then(response => {
              console.log(response);
              this.router.navigate(['/login']).catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));


        })
        .catch(error => console.log(error));


    }
  }

}
