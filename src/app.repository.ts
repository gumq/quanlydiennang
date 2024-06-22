import { EntityRepository, Repository } from 'typeorm';
import { DataEntity } from './app.entity';

@EntityRepository(DataEntity)
export class DataEntityRepository extends Repository<DataEntity> {}
