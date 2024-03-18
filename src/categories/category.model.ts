import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'category' })
export class Category extends Model<Category> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;
}
