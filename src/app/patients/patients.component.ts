import { Component, Injectable, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Patients } from '../models/patients.model';
import { Observable } from 'rxjs';
import { patientsDataLoad } from '../patients.action';

@Injectable()

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients$: Observable<Patients[]> | any;

  constructor(private store: Store<{patients: Patients[]}>){
    this.patients$ = store.pipe(select('patients'))
  }

  ngOnInit(): void {
    console.log('this.patients$ from PatientsComponent', this.patients$)
   }

  PatientsDataLoad() {
    this.store.dispatch(patientsDataLoad())
  }
}