import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function MySubIcon(props) {
  return (
    <>
     <Svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 108.557 68.941"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 588"
        transform="translate(-11709.283 -4695.256)"
      >
        <Rect
          width="105.556"
          height="65.941"
          data-name="Rectangle 93"
          opacity="1"
          rx="12"
          transform="translate(11710.783 4696.756)"
        ></Rect>
        <Path
          d="M0 0L105.556 0"
          data-name="Line 32"
          opacity="1"
          transform="translate(11710.783 4709.236)"
        ></Path>
        <Path
          d="M0 0L105.556 0"
          data-name="Line 33"
          opacity="1"
          transform="translate(11710.783 4727.806)"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoMySubIcon = React.memo(MySubIcon);
export default MemoMySubIcon;
