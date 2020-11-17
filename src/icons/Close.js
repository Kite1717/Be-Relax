import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function CloseIcon(props) {
  return (
    <>
      <Svg   width="1em" height="1em"
      viewBox="0 0 114.397 114.397" {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="5"
        data-name="Group 77"
        transform="translate(-1335.035 -577.18)"
      >
        <Circle
          cx="47.356"
          cy="47.356"
          r="47.356"
          data-name="Ellipse 16"
          opacity="0.5"
          transform="translate(1337.535 579.68)"
        ></Circle>
        <Path
          d="M1357.389 614.338l25.943 25.943h2.065l25.943-25.943"
          data-name="Path 96"
          opacity="0.5"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
