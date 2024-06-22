import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DataService } from './app.service';
import { DataEntity } from './app.entity';
import { UpdateDataDto } from './DTO/update-data.dto';

@ApiTags('data')
@Controller('data')
export class DataController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly dataService: DataService) {}

  @Get()
  @ApiOperation({ summary: 'Get all data' })
  @ApiResponse({ status: 200, description: 'The found records', type: [DataEntity] })
  findAll(): Promise<DataEntity[]> {
    return this.dataService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new data' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: DataEntity })
  create(@Body() data: Partial<DataEntity>): Promise<DataEntity> {
    return this.dataService.create(data);
  }

  @Post('update')
  async update(@Body() updateData: UpdateDataDto): Promise<any> {
    return this.dataService.update(updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete data by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted.' })
  delete(@Param('id') id: number): Promise<void> {
    return this.dataService.delete(id);
  }
}
