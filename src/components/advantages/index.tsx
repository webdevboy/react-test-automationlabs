import { ReactElement } from 'react';
import {
  AdvantagesStyled,
  AdvantagesGrid,
} from './styled';


import Container from '../common/container';
import AdvantageItem from './advantageItem';

const Advantages: React.FC = (): ReactElement => (
  <AdvantagesStyled>
    <Container>
      <AdvantagesGrid>
        <AdvantageItem
          imageUrl="/images/video-lesson.svg"
          title="Live Online"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />
        <AdvantageItem
          imageUrl="/images/time.svg"
          title="Flexible Schedule"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />
        <AdvantageItem
          imageUrl="/images/certificate.svg"
          title="Something"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />
      </AdvantagesGrid>
    </Container>
  </AdvantagesStyled>
);

export default Advantages;
