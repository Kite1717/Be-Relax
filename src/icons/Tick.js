import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function TickIcon(props) {
  return (
    <>
      <Svg
     
      width="56.832"
      height="31.559"
      viewBox="0 0 56.832 31.559"
      {...props}
    >
      <G data-name="Group 114" transform="translate(-303.26 -760.616)">
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M304.321 770.895l19.272 19.272 35.564-28.378"
          data-name="Path 10"
          opacity="0.5"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoTickIcon = React.memo(TickIcon);
export default MemoTickIcon;
