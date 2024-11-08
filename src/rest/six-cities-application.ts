import {inject, injectable} from 'inversify';
import {getMongoURI} from '../shared/helpers/index.js';
import {Config, SixCitiesAppSchema} from '../shared/libs/config/index.js';
import {DatabaseClient} from '../shared/libs/database-client/index.js';
import {Logger} from '../shared/libs/logger/index.js';
import {Component} from '../shared/types/index.js';

@injectable()
export class SixCitiesApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<SixCitiesAppSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
  ) {
  }

  public async init() {
    this.logger.info('Six cities application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    this.logger.info('Init database…');
    await this._initDb();
    this.logger.info('Init database completed');
  }

  private async _initDb() {
    const mongoUri = getMongoURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    return this.databaseClient.connect(mongoUri);
  }
}