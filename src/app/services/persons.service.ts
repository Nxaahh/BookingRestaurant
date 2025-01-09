import {Injectable} from '@angular/core';
import {Database, get, ref, set, DataSnapshot} from '@angular/fire/database';
import {Person} from '../models/persons.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private database: Database) {
  }


  savePerson(person: Person): Promise<void> {
    let personRef = ref(this.database, `/Persons/${person.uid}`);
    return set(personRef, person) as Promise<void>;
  }
  getPersonByUID(uid: string): Promise<DataSnapshot> {
    let personRef = ref(this.database, `Persons/${uid}`);
    return get(personRef) as Promise<DataSnapshot>;
  }



}
