import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {getRandomFloat, getTrueOrFalse, getRandomValueFromArr} from '../util.js/common';

const Comments = [
  `Nice, cozy, warm big bed apartment.`,
  `Wood and stone place.`,
  `Canal View Prinsengracht.`,
  `Beautiful & luxurious studio at great location.`,
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`
];

const Names = [
  `Anna`,
  `Kate`,
  `Angelina`,
  `Oleg`,
  `Ivan`,
  `Max`,
];

const AvatarUrls = [
  `avatar-max.jpg`,
  `avatar-angelina.jpg`,
  `avatar.svg`,
];

const createComment = () => ({
  comment: getRandomValueFromArr(Comments),
  date: dayjs(`2019-05-08T14:13:56.569Z`),
  id: nanoid(),
  rating: getRandomFloat(0, 5, 1),
  user: {
    avatarUrl: getRandomValueFromArr(AvatarUrls),
    id: nanoid(),
    isPro: getTrueOrFalse(),
    name: getRandomValueFromArr(Names)
  }
});

const reviews = new Array(5).fill().map(createComment);

export {reviews};
