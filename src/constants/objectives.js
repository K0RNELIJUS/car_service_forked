import TEXT from '../constants/texts';
import carImg from '../assets/images/aboutUsPage/objectivesSection/car-1.jpg';
import engineImg from '../assets/images/aboutUsPage/objectivesSection/engine.jpg';
import { uid } from 'uid';

const OBJECTIVES = [
  {
    id: uid(),
    img: `${carImg}`,
    title: `${TEXT.aboutUsPage.objectivesSection.card1.title}`,
    desc: `${TEXT.aboutUsPage.objectivesSection.card1.description}`,
    overlay: `#F85B29`,
  },
  {
    id: uid(),
    img: `${engineImg}`,
    title: `${TEXT.aboutUsPage.objectivesSection.card2.title}`,
    desc: `${TEXT.aboutUsPage.objectivesSection.card2.description}`,
    overlay: `#000000`,
  },
  {
    id: uid(),
    img: `${engineImg}`,
    title: `${TEXT.aboutUsPage.objectivesSection.card1.title}`,
    desc: `${TEXT.aboutUsPage.objectivesSection.card3.description}`,
    overlay: `#7443CA`,
  },
];

export default OBJECTIVES;
