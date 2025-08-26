export interface Caregiver {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  dateOfBirth: string; // or Date, depending on your API format
  photo: string;
  skill: string;
  experience: string;
  category: string; // 'Cat', 'Baby', 'Adult'
}
