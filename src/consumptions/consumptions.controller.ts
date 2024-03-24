import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ConsumptionsService } from './consumptions.service';
import { CreateConsumptionDto } from './dto/create-consumption';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
import { GetAllConsumptionDto } from './dto/get-all-consumption.dto';

@Controller('consumptions')
export class ConsumptionsController {
  constructor(private consumptionsService: ConsumptionsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllConsumptions(@Query() query: GetAllConsumptionDto, @Res() res) {
    const coordinates = await this.consumptionsService.findAll(query);
    return res.send(coordinates);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getConsumption(@Param('id') id: number) {
    return await this.consumptionsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createConsumption(@Body() createConsumptionDto: CreateConsumptionDto) {
    return await this.consumptionsService.create(createConsumptionDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateConsumption(
    @Body() updateConsumptionDto: UpdateConsumptionDto,
    @Param('id') id: number,
  ) {
    return await this.consumptionsService.update(id, updateConsumptionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteConsumptions(@Param('id') id: number) {
    return await this.consumptionsService.delete(id);
  }
}
