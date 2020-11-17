import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function Play2Icon(props) {
  return (
    <>
     <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="43.02"
      height="67.411"
      viewBox="0 0 43.02 67.411"
      {...props}
    >
      <G data-name="Group 579" transform="translate(-73.543 -1046.879)">
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M88.602 1110.335l24.134-24.133a7.944 7.944 0 000-11.233l-24.134-24.134a7.943 7.943 0 00-13.56 5.616v48.268a7.943 7.943 0 0013.56 5.616z"
          data-name="Path 30"
          opacity="0.55"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoPlay2Icon = React.memo(Play2Icon);
export default MemoPlay2Icon;
