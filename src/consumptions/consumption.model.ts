import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from '../categories/category.model';

@Table({ tableName: 'consumption' })
export class Consumption extends Model<Consumption> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: Date;

  @Column({ type: DataType.INTEGER, allowNull: false })
  calories: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  fat: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  carbs: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  protein: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId: number;
}
