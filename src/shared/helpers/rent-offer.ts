import {HousingConveniences, HousingType, RentOffer} from '../types/index.js';

export function createRentOffer(offerData: string): RentOffer {
  const [
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
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  return {
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
  };
}
