export class CreateAppointmentDto {
  start_time: string;
  end_time: string;
  status?: string;
  notes?: string;
  salonId: number;
  petId: number;
  serviceId: number;
  employeeId: number;
  roomId: number;
}
