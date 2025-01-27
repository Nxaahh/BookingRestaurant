import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../services/persons.service';
import {AuthService} from '../../../services/auth.service';
import {Person} from '../../../models/persons.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  person: Person | null = null;

  constructor(private personService: PersonService, private authService: AuthService) {
  }

  ngOnInit(): void {
    const currentPerson = this.authService.getCurrentUser();
    if (currentPerson) {


      this.personService.getPersonByUID(currentPerson.uid).then(person => {
        if (person.exists()) {
          this.person = person.val() as Person;
        }
      })
    }}}




