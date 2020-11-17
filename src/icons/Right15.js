import * as React from 'react';
import Svg, {G, Path,Circle,Text,TSpan} from 'react-native-svg';

function Right15Icon(props) {
  return (
    <>
     <Svg
   
      width="88.2"
      height="96.01"
      viewBox="0 0 88.2 96.01"
      {...props}
    >
      <G data-name="Group 82" transform="translate(-1775.007 -324.781)">
        <G data-name="Group 81">
          <G data-name="Group 74">
            <G
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="5"
              data-name="Group 73"
            >
              <Path
                d="M1860.707 376.691a41.564 41.564 0 11-25.407-38.331"
                data-name="Path 93"
              ></Path>
              <Path
                d="M1830.236 326.054l7.819 13.211-13.644 6.6"
                data-name="Path 94"
              ></Path>
            </G>
            <Text
              fill="#fff"
              data-name="15"
              fontFamily="Helvetica"
              fontSize="40.303"
              transform="translate(1801.795 390.213)"
            >
              <TSpan x="0" y="0">
                15
              </TSpan>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoRight15Icon = React.memo(Right15Icon);
export default MemoRight15Icon;
