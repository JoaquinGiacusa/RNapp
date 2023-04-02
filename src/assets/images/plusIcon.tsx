import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = ({color}: {color: string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);

export default PlusIcon;
