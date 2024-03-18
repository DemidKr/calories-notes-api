import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Consumption } from './consumption.model';
import { CreateConsumptionDto } from './dto/create-consumption';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
import { GetAllConsumptionDto } from './dto/get-all-consumption.dto';

@Injectable()
export class ConsumptionsService {
  constructor(
    @InjectModel(Consumption) private consumptionRepository: typeof Consumption,
  ) {}

  async findAll(
    getAllConsumptionDto: GetAllConsumptionDto,
  ): Promise<Consumption[]> {
    const { date } = getAllConsumptionDto;
    return await this.consumptionRepository.findAll({
      where: {
        date,
      },
    });
  }

  async findOne(id: number): Promise<Consumption> {
    return await this.consumptionRepository.findOne({
      where: { id },
    });
  }

  async create(
    createConsumptionDto: CreateConsumptionDto,
  ): Promise<Consumption> {
    const createdCoordinates = await this.consumptionRepository.create(
      createConsumptionDto,
    );
    return createdCoordinates.save();
  }

  async update(
    id: number,
    updateConsumptionDto: UpdateConsumptionDto,
  ): Promise<Consumption> {
    const coordinates = await this.consumptionRepository.findOne({
      where: { id },
    });

    await coordinates.update({ ...updateConsumptionDto });
    return coordinates.save();
  }

  async delete(id: number): Promise<void> {
    await this.consumptionRepository.destroy({ where: { id } });
  }
}
