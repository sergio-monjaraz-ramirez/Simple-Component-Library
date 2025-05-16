export default interface ReviewProps {
  creationDate: string;
  textQuestion: Array<{ friendlyName: string; value: string }>;
  patientName?: string;
  experienceValue?: number;
  location?: { friendlyName: string; value: string };
  speciality?: { friendlyName: string; value: string };
  stars: Array<{ friendlyName: string; value: number }>;
}
