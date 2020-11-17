import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function PauseIcon(props) {
  return (
    <>
    <Svg
   
      width="45.936"
      height="61.249"
      viewBox="0 0 45.936 61.249"
      {...props}
    >
      <G
        fill="#ffffff"
        data-name="Group 83"
        transform="translate(-1534.839 -216.532)"
      >
        <Path
          d="M1543.635 277.78a8.822 8.822 0 01-8.8-8.8v-43.652a8.822 8.822 0 018.8-8.8 8.822 8.822 0 018.8 8.8v43.656a8.822 8.822 0 01-8.8 8.796z"
          data-name="Path 78"
          opacity="0.55"
        ></Path>
        <Rect
          width="17.593"
          height="61.249"
          data-name="Rectangle 19"
          opacity="0.55"
          rx="8.796"
          transform="translate(1563.183 216.532)"
        ></Rect>
      </G>
    </Svg>
    </>
  );
}

const MemoPauseIcon = React.memo(PauseIcon);
export default MemoPauseIcon;
