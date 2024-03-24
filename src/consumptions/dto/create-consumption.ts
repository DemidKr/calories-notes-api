import { IsNotEmpty } from 'class-validator';

export class CreateConsumptionDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  calories: number;

  @IsNotEmpty()
  date: Date;

  fat: number;

  carbs: number;

  protein: number;

  @IsNotEmpty()
  categoryId: number;
}
