import { IsNotEmpty } from 'class-validator';

export class CreateConsumptionDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  calories: string;

  @IsNotEmpty()
  date: Date;

  fat: string;

  carbs: string;

  protein: string;

  @IsNotEmpty()
  categoryId: number;
}
