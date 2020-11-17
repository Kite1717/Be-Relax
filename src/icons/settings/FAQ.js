import * as React from 'react';
import Svg, {G, Path,Circle,Rect,TSpan,Text} from 'react-native-svg';

function FAQIcon(props) {
  return (
    <>
   <Svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 95.374 84.283"
      {...props}
    >
      <G data-name="Group 595" transform="translate(-11723.751 -5558.172)">
        <Text
          fill="#fff"
          data-name="?"
          fontFamily="Helvetica"
          fontSize="54"
          opacity="1"
          transform="translate(11765.298 5619.533)"
        
        >
          <TSpan x="-15.016" y="0">
            ?
          </TSpan>
        </Text>
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M11788.715 5632.21a40.045 40.045 0 118.855-8.775"
          data-name="Path 438"
          opacity="1"
        ></Path>
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M11798.422 5622.232l16.181 17.534-26.962-6.809"
          data-name="Path 439"
          opacity="1"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoFAQIcon = React.memo(FAQIcon);
export default MemoFAQIcon;
