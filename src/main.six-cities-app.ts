import 'reflect-metadata';
import {Container} from 'inversify';
import {SixCitiesApplication} from './rest/index.js';
import {Config, SixCitiesAppConfig, SixCitiesAppSchema} from './shared/libs/config/index.js';
import {Logger, PinoLogger} from './shared/libs/logger/index.js';
import {Component} from './shared/types/index.js';


async function bootstrap() {
  const container = new Container();
  container.bind<SixCitiesApplication>(Component.SixCitiesApplication).to(SixCitiesApplication).inSingletonScope();
  container.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  container.bind<Config<SixCitiesAppSchema>>(Component.Config).to(SixCitiesAppConfig).inSingletonScope();

  const application = container.get<SixCitiesApplication>(Component.SixCitiesApplication);
  await application.init();
}

bootstrap();
