export class CreateEmployeeBreaksDto {
  day_of_week?: number;
  break_date?: string;
  start_time: string;
  end_time: string;
  description?: string;
  employeeId: number;
}
