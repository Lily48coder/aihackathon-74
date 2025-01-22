export interface DoctorInfo {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  hospital: string;
  department: string;
}

export interface Patient {
  id: number;
  name: string;
  state: string;
  area: string;
  symptoms: string[];
}