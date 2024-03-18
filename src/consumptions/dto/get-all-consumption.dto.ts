import { IsNotEmpty } from 'class-validator';

export class GetAllConsumptionDto {
  @IsNotEmpty()
  date: Date;
}
