import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const UserIcon = ({color}: {color: string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
);

export default UserIcon;
