import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function AttentionIcon(props) {
  return (
    <>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 96.023 78.584"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 592"
        transform="translate(-11721.454 -5132.414)"
      >
        <Path
          d="M11792.084 5192.836a37.8 37.8 0 116.454-21.13h-5.655s-3.475.167.869 4.511l9.339 11.294s1.521 3.04 3.91 0 7.819-12.815 7.819-12.815 2.605-3.909 0-3.909h-3.856s-1.683 0-1.683-1.412a41.68 41.68 0 00-2.606-15.149"
          data-name="Path 430"
        ></Path>
        <Path
          d="M11748.575 5164.488l12.6 7.217 16.072-9.606"
          data-name="Path 431"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoAttentionIcon = React.memo(AttentionIcon);
export default MemoAttentionIcon;
