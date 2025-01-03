import 'reflect-metadata';
import {Container} from 'inversify';
import {createRestApplicationContainer, SixCitiesApplication} from './rest/index.js';
import {createCommentContainer} from './shared/modules/comment/index.js';
import {createRentOfferContainer} from './shared/modules/rent-offer/index.js';
import {createSessionContainer} from './shared/modules/session/index.js';
import {createUserContainer} from './shared/modules/user/index.js';
import {Component} from './shared/types/index.js';


async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createRentOfferContainer(),
    createCommentContainer(),
    createSessionContainer()
  );
  const application = appContainer.get<SixCitiesApplication>(Component.SixCitiesApplication);
  await application.init();
}

await bootstrap();
