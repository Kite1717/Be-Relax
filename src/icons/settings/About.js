import * as React from 'react';
import Svg, {G, Path,Circle,Rect,TSpan,Text} from 'react-native-svg';

function AboutIcon(props) {
  return (
    <>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 95.331 95.331"
      {...props}
    >
      <G data-name="Group 597" transform="translate(-11719.796 -5700.504)">
        <G data-name="Group 596">
          <Circle
            cx="40.047"
            cy="40.047"
            r="40.047"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="3"
            data-name="Ellipse 29"
            opacity="1"
            transform="rotate(-80.783 9258.273 -3997.796)"
          ></Circle>
          <G data-name="Group 259">
            <Text
              fill="#fff"
              fontFamily="Helvetica"
              fontSize="54"
              opacity="1"
              transform="translate(11767.466 5764.905)"
            >
              <TSpan x="-15.016" y="0">
                h
              </TSpan>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoAboutIcon = React.memo(AboutIcon);
export default MemoAboutIcon;
