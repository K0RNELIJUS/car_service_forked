import CONTACTS from '../../../../../../constants/contacts';
import { Fragment } from 'react';
import { LogoIcon } from '../../../../../../assets/icons/index';
import { StyledInfoWindowContent } from './InfoWindowContent.style';

const InfoWindowContent = () => {
  return (
    <StyledInfoWindowContent>
      <LogoIcon />
      <dl>
        {CONTACTS.map((contact) => (
          <Fragment key={contact.id}>
            <dt>{contact.label}</dt>
            <dd>{contact.data}</dd>
          </Fragment>
        ))}
      </dl>
    </StyledInfoWindowContent>
  );
};

export default InfoWindowContent;
