import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataEntity } from './app.entity';
import { DataService } from './app.service';
import { DataController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.131.74.22',
      port: 3306,
      username: 'raspberry',
      password: 'admin6789@',
      database: 'admin_db',
      entities: [DataEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DataEntity]),
  ],
  controllers: [DataController],
  providers: [DataService],
})
export class AppModule {}
