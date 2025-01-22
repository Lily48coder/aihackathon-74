export type UserType = 'doctor' | 'patient';

export type Hospital = {
  id: number;
  name: string;
  location: string;
};

export type Department = {
  id: number;
  name: string;
};

export type State = {
  id: number;
  name: string;
  area: string;
};

export type SymptomCategory = 
  | 'General'
  | 'Respiratory'
  | 'Cardiovascular'
  | 'Digestive'
  | 'Neurological'
  | 'Skin'
  | 'Urinary'
  | 'Musculoskeletal'
  | 'Mental Health'
  | 'Endocrine'
  | 'Immunologic';

export type Symptom = {
  id: number;
  name: string;
  category: SymptomCategory;
};

export type CampSchedule = {
  department: string;
  date: string;
  location: string;
  timing: string;
};

export type Patient = {
  id: number;
  name: string;
  state: string;
  area: string;
  symptoms: string[];
};

export type DoctorInfo = {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  hospital: string;
  department: string;
};