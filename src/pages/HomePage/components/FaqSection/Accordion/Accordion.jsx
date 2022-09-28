import { MinusIcon, PlusIcon } from '../../../../../assets/icons';
import { useState } from 'react';

import {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionContent,
} from './Accortion.style';

const Accordion = ({ title, content }) => {
  // State
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordion>
      <div>
        <StyledAccordionTitle
          expanded={!isActive}
          onClick={() => setIsActive(!isActive)}>
          <h6>{title}</h6>
          <div>{isActive ? <MinusIcon /> : <PlusIcon />}</div>
        </StyledAccordionTitle>
        {isActive && (
          <StyledAccordionContent>
            <p> {content}</p>
          </StyledAccordionContent>
        )}
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
