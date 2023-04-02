import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsIcon = ({color}: {color: string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
  </Svg>
);

export default SettingsIcon;
