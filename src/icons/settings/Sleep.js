import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function SleepIcon(props) {
  return (
    <>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 98.967 101.089"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 593"
        transform="translate(-11721.454 -5252.213)"
      >
        <Circle
          cx="40.047"
          cy="40.047"
          r="40.047"
          data-name="Ellipse 28"
          transform="translate(11722.954 5271.708)"
        ></Circle>
        <Path
          d="M11749 5298.607l13.514 16.167 11.089-6.326"
          data-name="Path 432"
        ></Path>
        <Path
          d="M11814.6 5281.317l-7.717-2.584 9.372-5.955-7.914-3.064"
          data-name="Path 433"
        ></Path>
        <Path
          d="M11798.328 5253.6l10.011 4.186-13.33 8.748 10.205 3.749"
          data-name="Path 434"
        ></Path>
        <Path
          d="M11810.768 5287.149l6.735 3.541-7.707 5.207 5.477 3.677"
          data-name="Path 435"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoSleepIcon = React.memo(SleepIcon);
export default MemoSleepIcon;
