import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import {HousingConveniences, HousingType, RentalOffer} from '../types/index.js';
import {resolve} from 'node:path';


export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filePath: string
  ) {
  }

  public read(): void {
    try {
      this.rawData = readFileSync(resolve(this.filePath), {encoding: 'utf-8'});
    } catch (error: unknown) {
      console.error(`Failed to read file from ${this.filePath}`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  public toArray(): RentalOffer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map((
        [
          title,
          description,
          createdDate,
          city,
          previewImage,
          housingPhoto,
          isPremium,
          isFavorite,
          rating,
          housingType,
          roomsCount,
          guestsCount,
          price,
          conveniences,
          author,
          commentsCount,
          coordinates]) => ({
        title,
        description,
        createdDate: new Date(createdDate),
        city,
        previewImage,
        housingPhoto,
        isPremium: isPremium.toLowerCase() === 'true',
        isFavorite: isFavorite.toLowerCase() === 'true',
        rating: Number.parseInt(rating, 10),
        housingType: housingType as HousingType,
        roomsCount: Number.parseInt(roomsCount, 10),
        guestsCount: Number.parseInt(guestsCount, 10),
        price: Number.parseInt(price, 10),
        conveniences: conveniences.split(';')
          .map((convenience) => (convenience as HousingConveniences)),
        author,
        commentsCount: Number.parseInt(commentsCount, 10),
        coordinates: {
          latitude: Number.parseFloat(coordinates.split(';')[0]),
          longitude: Number.parseFloat(coordinates.split(';')[1])
        }
      }));
  }
}
