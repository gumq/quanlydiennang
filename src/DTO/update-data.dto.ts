// update-data.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDataDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  DateTime: string;

  @ApiProperty()
  Voltage: string;

  @ApiProperty()
  Current: string;

  @ApiProperty()
  Power: string;

  @ApiProperty()
  Energy: string;

  @ApiProperty()
  Frequency: string;

  @ApiProperty()
  PowerFactor: string;
}
