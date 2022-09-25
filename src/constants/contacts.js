import { uid } from 'uid';
import TEXTS from './texts';
const CONTACTS = [
  {
    id: uid(),
    label: TEXTS.contactPage.contact.address.label,
    data: TEXTS.contactPage.contact.address.address,
  },
  {
    id: uid(),
    label: TEXTS.contactPage.contact.details.label,
    data: TEXTS.contactPage.contact.details.contacts,
  },

  {
    id: uid(),
    label: TEXTS.contactPage.contact.openingHours.label,
    data: TEXTS.contactPage.contact.openingHours.hours,
  },
];

export default CONTACTS;
