export class CreateServiceDto {
  name: string;
  description?: string;
  price: number;
  duration_minutes: number;
  salonId: number;
}
