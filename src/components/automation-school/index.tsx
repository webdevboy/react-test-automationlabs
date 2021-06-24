import { ReactElement } from 'react';

import {
  AutomationSchoolStyled,
  AutomationSchoolTitle,
  AutomationSchoolDescription,
  AutomationSchoolTests,
} from './styled';

import Container from '../common/container';

const AutomationSchool: React.FC = (): ReactElement => (
  <AutomationSchoolStyled>
    <Container>
      <AutomationSchoolTitle>Some title Some title Some title Some title Some title</AutomationSchoolTitle>
      <AutomationSchoolDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </AutomationSchoolDescription>
      <AutomationSchoolTests>
        <img src="/images/consulting.png" alt="" />
      </AutomationSchoolTests>
    </Container>
  </AutomationSchoolStyled>
);

export default AutomationSchool;
