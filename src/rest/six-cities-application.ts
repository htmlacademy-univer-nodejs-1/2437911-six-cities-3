import {inject, injectable} from 'inversify';
import {Config, SixCitiesAppSchema} from '../shared/libs/config/index.js';
import {Logger} from '../shared/libs/logger/index.js';
import {Component} from '../shared/types/index.js';

@injectable()
export class SixCitiesApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<SixCitiesAppSchema>,
  ) {
  }

  public async init() {
    this.logger.info('Six cities application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
