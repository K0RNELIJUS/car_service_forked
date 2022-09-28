import { uid } from 'uid';
import TEXTS from './texts';
import user1 from '../assets/images/homePage/reviewsSection/user1.jpg';
import user2 from '../assets/images/homePage/reviewsSection/user2.jpg';

const REVIEWS = [
  {
    id: uid(),
    img: user1,
    name: TEXTS.homePage.reviwsSection.card1.name,
    city: TEXTS.homePage.reviwsSection.card1.city,
    text: TEXTS.homePage.reviwsSection.card1.text,
  },
  {
    id: uid(),
    img: user2,
    name: TEXTS.homePage.reviwsSection.card2.name,
    city: TEXTS.homePage.reviwsSection.card2.city,
    text: TEXTS.homePage.reviwsSection.card2.text,
  },

  {
    id: uid(),
    img: user2,
    name: TEXTS.homePage.reviwsSection.card3.name,
    city: TEXTS.homePage.reviwsSection.card3.city,
    text: TEXTS.homePage.reviwsSection.card3.text,
  },
  {
    id: uid(),
    img: user1,
    name: TEXTS.homePage.reviwsSection.card4.name,
    city: TEXTS.homePage.reviwsSection.card4.city,
    text: TEXTS.homePage.reviwsSection.card4.text,
  },

  {
    id: uid(),
    img: user1,
    name: TEXTS.homePage.reviwsSection.card5.name,
    city: TEXTS.homePage.reviwsSection.card5.city,
    text: TEXTS.homePage.reviwsSection.card5.text,
  },
  {
    id: uid(),
    img: user2,
    name: TEXTS.homePage.reviwsSection.card6.name,
    city: TEXTS.homePage.reviwsSection.card6.city,
    text: TEXTS.homePage.reviwsSection.card6.text,
  },
  {
    id: uid(),
    img: user2,
    name: TEXTS.homePage.reviwsSection.card7.name,
    city: TEXTS.homePage.reviwsSection.card7.city,
    text: TEXTS.homePage.reviwsSection.card7.text,
  },
  {
    id: uid(),
    img: user1,
    name: TEXTS.homePage.reviwsSection.card8.name,
    city: TEXTS.homePage.reviwsSection.card8.city,
    text: TEXTS.homePage.reviwsSection.card8.text,
  },
];

export default REVIEWS;
