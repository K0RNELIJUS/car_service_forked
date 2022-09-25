import { Fragment } from 'react';
import { StyledContacts } from './Contacts.style';
import CONTACTS from '../../../../constants/contacts';

const Contacts = () => {
  return (
    <StyledContacts>
      {CONTACTS.map((contact) => (
        <Fragment key={contact.id}>
          <dt>{contact.label}</dt>
          <dd>{contact.data}</dd>
        </Fragment>
      ))}
    </StyledContacts>
  );
};

export default Contacts;
