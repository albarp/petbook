export class CreatePetDto {
  name: string;
  breed?: string;
  age?: number;
  notes?: string;
  clientId: number;
}
