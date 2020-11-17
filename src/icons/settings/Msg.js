import * as React from 'react';
import Svg, {G, Path,Circle,Rect,TSpan,Text} from 'react-native-svg';

function MsgIcon(props) {
  return (
    <>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="83.744"
      height="57.458"
      viewBox="0 0 83.744 57.458"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 600"
        transform="translate(-5214.595 -7475.014)"
      >
        <Rect
          width="80.744"
          height="54.458"
          data-name="Rectangle 89"
          opacity="0.5"
          rx="12"
          transform="translate(5216.095 7476.514)"
        ></Rect>
        <Path
          d="M5224.011 7485.59l32.457 25.527 29.943-26.094"
          data-name="Path 395"
          opacity="0.5"
        ></Path>
        <Path
          d="M9.667 0L0 9.631"
          data-name="Line 27"
          opacity="0.5"
          transform="translate(5233.347 7504.736)"
        ></Path>
        <Path
          d="M0 0L9.559 9.442"
          data-name="Line 28"
          opacity="0.5"
          transform="translate(5270.102 7503.743)"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoMsgIcon = React.memo(MsgIcon);
export default MemoMsgIcon;
