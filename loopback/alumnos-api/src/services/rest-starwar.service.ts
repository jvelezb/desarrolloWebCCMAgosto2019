import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {StarwarapiDataSource} from '../datasources';

export interface RestStarwar {
  getCharacter(personId:string): Promise<any>
}

export class RestStarwarProvider implements Provider<RestStarwar> {
  constructor(
    // starwarapi must match the name property in the datasource json file
    @inject('datasources.starwarapi')
    protected dataSource: StarwarapiDataSource = new StarwarapiDataSource(),
  ) {}

  value(): Promise<RestStarwar> {
    return getService(this.dataSource);
  }
}
