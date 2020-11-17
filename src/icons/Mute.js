import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function MuteIcon(props) {
  return (
    <>
     <Svg
     
      width="61.249"
      height="61.249"
      viewBox="0 0 61.249 61.249"
      {...props}
    >
      <G data-name="Group 84" transform="translate(-1604.227 -216.532)">
        <Rect
          width="61.249"
          height="61.249"
          fill="#fff"
          data-name="Rectangle 18"
          opacity="0.55"
          rx="12"
          transform="translate(1604.227 216.532)"
        ></Rect>
      </G>
    </Svg>
    </>
  );
}

const MemoMuteIcon= React.memo(MuteIcon);
export default MemoMuteIcon;
