import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoriesRepository: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.findAll();
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoriesRepository.findOne({
      where: { id },
    });
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCoordinates = await this.categoriesRepository.create(
      createCategoryDto,
    );
    return createdCoordinates.save();
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const coordinates = await this.categoriesRepository.findOne({
      where: { id },
    });

    await coordinates.update({ ...updateCategoryDto });
    return coordinates.save();
  }

  async delete(id: number): Promise<void> {
    await this.categoriesRepository.destroy({ where: { id } });
  }
}
