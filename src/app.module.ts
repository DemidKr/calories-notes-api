import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesModule } from './categories/categories.module';
import { ConsumptionsModule } from './consumptions/consumptions.module';
import { Consumption } from './consumptions/consumption.model';
import { Category } from './categories/category.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Category, Consumption],
      autoLoadModels: true,
    }),
    CategoriesModule,
    ConsumptionsModule,
  ],
})
export class AppModule {}
