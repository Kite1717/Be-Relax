import * as React from 'react';
import Svg, {G, Path,Circle,Rect} from 'react-native-svg';

function PasswordIcon(props) {
  return (
    <>
     <Svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 60.243 85.66"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 590"
        transform="translate(-11733.886 -4823.36)"
      >
        <Path
          d="M11766.988 4878.9l2.511 14.174h-11.742l2.461-14.174-.694-.592a5.771 5.771 0 118.412-.268z"
          data-name="Path 426"
        ></Path>
        <Rect
          width="57.243"
          height="55.24"
          data-name="Rectangle 94"
          rx="12"
          transform="translate(11735.386 4852.28)"
        ></Rect>
        <Path
          d="M11739.724 4855.639v-14.56a16.267 16.267 0 0116.22-16.219h16.56a16.267 16.267 0 0116.219 16.219v14.56"
          data-name="Path 427"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoPasswordIcon = React.memo(PasswordIcon);
export default MemoPasswordIcon;
