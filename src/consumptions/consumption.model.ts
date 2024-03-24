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

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: Date;

  @Column({ type: DataType.INTEGER, allowNull: false })
  calories: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  fat: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  carbs: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  protein: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId: number;
}
