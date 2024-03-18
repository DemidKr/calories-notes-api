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
  Req,
  Res,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllCategories(@Req() req, @Res() res) {
    const coordinates = await this.categoriesService.findAll();
    return res.send(coordinates);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getCategory(@Param('id') id: number) {
    return await this.categoriesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @Req() req,
  ) {
    return await this.categoriesService.create(createCategoryDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateCategory(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id') id: number,
    @Req() req,
  ) {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteCategory(@Param('id') id: number) {
    return await this.categoriesService.delete(id);
  }
}
