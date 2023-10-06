import IMAGES_PATH from './IMAGES_PATH';

export const exploreButtons = [
  {
    name: 'Sights',
    icon: IMAGES_PATH.sights,
  },
  {
    name: 'Personalized',
    icon: IMAGES_PATH.personalized,
  },
  {
    name: 'Food',
    icon: IMAGES_PATH.food,
  },
  {
    name: 'Events',
    icon: IMAGES_PATH.events,
  },
  {
    name: 'Entertainments',
    icon: IMAGES_PATH.entertainment,
  },
];

export const nearby_foods = new Array(4).fill({
  name: 'Food Point Name',
  address: 'Food point address here',
  image: IMAGES_PATH.food_image,
});

export const sights = new Array(6).fill({
  name: 'Place Name Here',
  address: 'Food point address here',
  image: IMAGES_PATH.sight_image,
});

export const ratings = [
  {
    name: 'Helene Moore',
    description:
      "The dress is great! Very classy and comfortable. It fit perfectly! I 'm 57 and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed.",
    date: 'June 5, 2019',
  },
  {
    name: 'Lincoln Baptista',
    description: 'Greate service excellent',
    date: 'June 5, 2019',
  },
  {
    name: 'Lincoln Baptista',
    description: 'Greate service excellent',
    date: 'June 5, 2019',
  },
];

export const messages = new Array(4).fill({
  message:
    'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  date: '12 Aug 2021 , 7: 28',
});
