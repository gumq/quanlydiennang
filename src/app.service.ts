import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataEntity } from './app.entity';
import { UpdateDataDto } from './DTO/update-data.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(DataEntity)
    private readonly dataRepository: Repository<DataEntity>,
  ) {}

  async findAll(): Promise<DataEntity[]> {
    return this.dataRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  create(data: Partial<DataEntity>): Promise<DataEntity> {
    return this.dataRepository.save(data);
  }

  async update(updateData: UpdateDataDto): Promise<DataEntity> {
    const { id, DateTime, Voltage, Current, Power, Energy, Frequency, PowerFactor } = updateData;
    
    // Tìm và cập nhật dữ liệu
    const existingData = await this.dataRepository.findOne({where:{id}});
    if (!existingData) {
      throw new Error(`Data with id ${id} not found.`);
    }

    existingData.DateTime = DateTime;
    existingData.Voltage = parseFloat(Voltage);
    existingData.Current = parseFloat(Current);
    existingData.Power = parseFloat(Power);
    existingData.Energy = parseFloat(Energy);
    existingData.Frequency = parseFloat(Frequency);
    existingData.PowerFactor = parseFloat(PowerFactor);

    return this.dataRepository.save(existingData);
  }

  async delete(id: number): Promise<void> {
    await this.dataRepository.delete(id);
  }
}
