import { Action, createReducer, on } from "@ngrx/store";
import { patientsDataLoad, reset } from "././patients.action";
import postJsonPatients from 'src/assets/patients.json';
import { data } from "./models/patients.model";

export const initialState: data = postJsonPatients;
export const postDataPatients: data = postJsonPatients;

const _patientsReducer = createReducer(initialState, 
    on(patientsDataLoad, state => (state = postDataPatients) ),
    on(reset, state => (state = initialState))
    );

export function PatientsReducer(state: any, action: Action){
    return _patientsReducer(postDataPatients, action);
}