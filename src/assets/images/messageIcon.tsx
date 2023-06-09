import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageIcon = ({color}: {color: string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
);

export default MessageIcon;
