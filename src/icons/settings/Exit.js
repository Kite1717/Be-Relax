import * as React from 'react';
import Svg, {G, Path,Circle,Rect,TSpan,Text} from 'react-native-svg';

function ExitIcon(props) {
  return (
    <>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 74.768 108.778"
      {...props}
    >
      <G data-name="Group 599" transform="translate(-11734.594 -5847.928)">
        <G data-name="Group 257">
          <Rect
            width="71.768"
            height="105.778"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="3"
            data-name="Rectangle 95"
            opacity="1"
            rx="12"
            transform="translate(11736.094 5849.428)"
          ></Rect>
        </G>
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M41.701 0L0 0"
          data-name="Line 35"
          opacity="1"
          transform="translate(11749.868 5903.213)"
        ></Path>
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M11767.46 5887.5l-17.592 15.711 17.461 15.434"
          data-name="Path 440"
          opacity="1"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoExitIcon = React.memo(ExitIcon);
export default MemoExitIcon;
