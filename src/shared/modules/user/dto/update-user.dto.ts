import {UserType} from '../../../types/index.js';

export class UpdateUserDto {
  public firstname: string;
  public avatarPath: string;
  public type: UserType;
  public favoriteRentOffers: string[];
}
