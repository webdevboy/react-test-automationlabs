import { ReactElement } from 'react';

import { IAdvantageItemProps } from './interfaces/advantageItem-props.interface';
import { AdvantageItemImg, AdvantageItemTitle, AdvantageItemDescription } from './styled';

const AdvantageItem: React.FC<IAdvantageItemProps> = ({ imageUrl, title, description }): ReactElement => (
  <div>
    <AdvantageItemImg>
      <img src={imageUrl} alt="" />
    </AdvantageItemImg>
    <AdvantageItemTitle>{title}</AdvantageItemTitle>
    <AdvantageItemDescription>
      {description}
    </AdvantageItemDescription>
  </div>
);

export default AdvantageItem;
