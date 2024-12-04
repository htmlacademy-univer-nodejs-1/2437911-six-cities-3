import {Coordinates, HousingConveniences, HousingType} from '../../../types/index.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import {PatchRentOfferValidationMessage} from './patch-rent-offer.messages.js';

export class PatchRentOfferDto {
  @MinLength(10, {message: PatchRentOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: PatchRentOfferValidationMessage.title.maxLength})
  @IsString({message: PatchRentOfferValidationMessage.title.invalidFormat})
  public title: string;

  @MinLength(20, {message: PatchRentOfferValidationMessage.description.minLength})
  @MaxLength(1023, {message: PatchRentOfferValidationMessage.description.maxLength})
  @IsString({message: PatchRentOfferValidationMessage.description.invalidFormat})
  public description: string;

  @IsDateString({}, {message: PatchRentOfferValidationMessage.createdDate.invalidFormat})
  public createdDate: Date;

  @IsString({message: PatchRentOfferValidationMessage.city.invalidFormat})
  public city: string;

  @IsString({message: PatchRentOfferValidationMessage.previewImage.invalidFormat})
  public previewImage: string;

  @IsArray({message: PatchRentOfferValidationMessage.housingPhoto.invalidFormat})
  @Length(6, 6, {message: PatchRentOfferValidationMessage.housingPhoto.length})
  @IsString({each: true, message: PatchRentOfferValidationMessage.housingPhoto.invalidValuesFormat})
  public housingPhoto: string[];

  public isPremium: boolean;
  public isFavorite: boolean;

  @IsEnum(HousingType, {message: PatchRentOfferValidationMessage.housingType.invalid})
  public housingType: HousingType;

  @IsInt({message: PatchRentOfferValidationMessage.roomsCount.invalidFormat})
  @Min(1, {message: PatchRentOfferValidationMessage.roomsCount.minValue})
  @Max(8, {message: PatchRentOfferValidationMessage.roomsCount.maxValue})
  public roomsCount: number;

  @IsInt({message: PatchRentOfferValidationMessage.guestsCount.invalidFormat})
  @Min(1, {message: PatchRentOfferValidationMessage.guestsCount.minValue})
  @Max(10, {message: PatchRentOfferValidationMessage.guestsCount.maxValue})
  public guestsCount: number;

  @IsInt({message: PatchRentOfferValidationMessage.price.invalidFormat})
  @Min(100, {message: PatchRentOfferValidationMessage.price.minValue})
  @Max(100000, {message: PatchRentOfferValidationMessage.price.maxValue})
  public price: number;

  @IsArray({message: PatchRentOfferValidationMessage.conveniences.invalidFormat})
  @IsEnum(HousingConveniences, {each: true, message: PatchRentOfferValidationMessage.conveniences.invalid})
  @MinLength(1, {message: PatchRentOfferValidationMessage.conveniences.length})
  public conveniences: HousingConveniences[];

  @IsMongoId({message: PatchRentOfferValidationMessage.authorId.invalidId})
  public authorId: string;

  public coordinates: Coordinates;
}
