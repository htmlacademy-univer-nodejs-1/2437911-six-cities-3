import {Container} from 'inversify';
import {Config, SixCitiesAppConfig, SixCitiesAppSchema} from '../shared/libs/config/index.js';
import {DatabaseClient, MongoDatabaseClient} from '../shared/libs/database-client/index.js';
import {Logger, PinoLogger} from '../shared/libs/logger/index.js';
import {Component} from '../shared/types/index.js';
import {SixCitiesApplication} from './six-cities-application.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<SixCitiesApplication>(Component.SixCitiesApplication).to(SixCitiesApplication).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<Config<SixCitiesAppSchema>>(Component.Config).to(SixCitiesAppConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  return restApplicationContainer;
}
