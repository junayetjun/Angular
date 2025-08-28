export type CaregiverCategory = 'Cat' | 'Baby' | 'Adult';

export interface Caregiver {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  photo: string;
  skill: string;
  experience: string;
  categories: CaregiverCategory[];  // ✅ Correct key and value type
}
