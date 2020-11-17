import * as React from 'react';
import Svg, {G, Path,Circle,Text,TSpan} from 'react-native-svg';

function Left15Icon(props) {
  return (
    <>
       <Svg
    
      width="88.2"
      height="96.01"
      viewBox="0 0 88.2 96.01"
      {...props}
    >
      <G data-name="Group 80" transform="translate(-1370.528 -324.781)">
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="5"
          data-name="Group 71"
        >
          <Path
            d="M1373.028 376.691a41.565 41.565 0 1025.407-38.331"
            data-name="Path 91"
          ></Path>
          <Path
            d="M1403.5 326.054l-7.819 13.211 13.644 6.6"
            data-name="Path 92"
          ></Path>
        </G>
        <Text
          fill="#fff"
          data-name="15"
          fontFamily="Helvetica"
          fontSize="40.303"
          transform="translate(1396.958 390.213)"
        >
          <TSpan x="0" y="0">
            15
          </TSpan>
        </Text>
      </G>
    </Svg>
    </>
  );
}

const MemoLeft15Icon= React.memo(Left15Icon);
export default MemoLeft15Icon;
