import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function BackIcon(props) {
  return (
    <>
      <Svg  
     width="1em" height="1em"
      viewBox="0 0 114.397 114.397" {...props}>
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
        data-name="Group 51"
        transform="translate(-1631.908 -32.093)"
      >
        <Circle
          cx="47.356"
          cy="47.356"
          r="47.356"
          data-name="Ellipse 6"
          opacity="0.5"
          transform="rotate(-80.783 892.875 -896.49)"
        ></Circle>
        <Path
          d="M1694.805 61.79l-25.943 25.943V89.8l25.943 25.943"
          data-name="Path 60"
          opacity="0.5"
        ></Path>
      </G>
      </Svg>
    </>
  );
}

const MemoBackIcon = React.memo(BackIcon);
export default MemoBackIcon;
