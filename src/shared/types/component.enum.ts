export const Component = {
  SixCitiesApplication: Symbol.for('SixCitiesApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  RentOfferService: Symbol.for('RentOfferService'),
  RentOfferModel: Symbol.for('RentOfferModel'),
  CommentModel: Symbol.for('CommentModel'),
  CommentService: Symbol.for('CommentService'),
  SessionModel: Symbol.for('SessionModel'),
  SessionService: Symbol.for('SessionService'),
} as const;
