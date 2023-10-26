import { data } from "./models/patients.model";

export interface PatientsStateModel{
    data: data,
}

@State<data>({
    name: 'patients',
    defaults: { data: initialState}
})