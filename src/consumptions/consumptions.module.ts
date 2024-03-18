import { Module } from '@nestjs/common';
import { ConsumptionsService } from './consumptions.service';
import { ConsumptionsController } from './consumptions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Consumption } from './consumption.model';

@Module({
  providers: [ConsumptionsService],
  controllers: [ConsumptionsController],
  imports: [SequelizeModule.forFeature([Consumption])],
  exports: [ConsumptionsService],
})
export class ConsumptionsModule {}
