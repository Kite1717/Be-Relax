import * as React from 'react';
import Svg, {G, Path,Circle,Rect,TSpan,Text} from 'react-native-svg';

function LoginIcon(props) {
  return (
    <>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
    
      viewBox="0 0 83.094 88.741"
      {...props}
    >
      <G data-name="Group 594" transform="translate(-11720.725 -5411.098)">
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          data-name="Group 253"
          opacity="1"
        >
          <Path
            d="M11797.726 5439.653q.356.678.688 1.37a40.054 40.054 0 11-36.142-22.777"
            data-name="Path 436"
          ></Path>
          <Path
            d="M11748.267 5445.145l14.514 14.167.089 25.674"
            data-name="Path 437"
          ></Path>
        </G>
        <Text
          fill="#fff"
          data-name="24"
          fontFamily="Helvetica"
          fontSize="27"
          opacity="1"
          transform="translate(11784.934 5432.098)"
        >
          <TSpan x="-15.016" y="0">
            24
          </TSpan>
        </Text>
      </G>
    </Svg>
    </>
  );
}

const MemoLoginIcon = React.memo(LoginIcon);
export default MemoLoginIcon;
