import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('b8_27_eb_ed_f1_a5')
export class DataEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The ID of the record' })
  id: number;

  @Column()
  @ApiProperty({ example: '2024-06-20 17:01:03', description: 'The DateTime of the record' })
  DateTime: string;

  @Column('decimal')
  @ApiProperty({ example: 237.9, description: 'The voltage value' })
  Voltage: number;

  @Column('decimal')
  @ApiProperty({ example: 1.129, description: 'The current value' })
  Current: number;

  @Column('decimal')
  @ApiProperty({ example: 222.6, description: 'The power value' })
  Power: number;

  @Column('decimal')
  @ApiProperty({ example: 3097.35, description: 'The energy value' })
  Energy: number;

  @Column('decimal')
  @ApiProperty({ example: 50, description: 'The frequency value' })
  Frequency: number;

  @Column('decimal')
  @ApiProperty({ example: 0.83, description: 'The power factor' })
  PowerFactor: number;
}
