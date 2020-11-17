import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function Human2Icon(props) {
  return (
    <>
     <Svg
 
      width="65.219"
      height="83.835"
      viewBox="0 0 65.219 83.835"
      {...props}
    >
      <G data-name="Group 79" transform="translate(-673.042 -360.809)">
        <G fill="none" stroke="#fff" strokeMiterlimit="10" data-name="Group 48">
          <Circle
            cx="10.942"
            cy="10.942"
            r="10.942"
            strokeWidth="3"
            data-name="Ellipse 2"
            opacity="0.5"
            transform="translate(695.571 362.309)"
          ></Circle>
          <Path
            strokeWidth="3"
            d="M703 404.221q-.2 4.883-.406 9.765a1.8 1.8 0 01-2.279 2.052 98.6 98.6 0 01-26.8-3.674 92.836 92.836 0 019.524-20.99l11.453-5.125"
            data-name="Path 50"
            opacity="0.5"
          ></Path>
          <Path
            strokeWidth="3"
            d="M708.442 403.9l.247 9.77a1.8 1.8 0 002.245 2.089 98.634 98.634 0 0026.858-3.235 92.791 92.791 0 00-9.179-21.143l-11.159-5.129"
            data-name="Path 51"
            opacity="0.5"
          ></Path>
          <Path
            strokeWidth="3"
            d="M4.317 24.069L0 0"
            data-name="Line 2"
            opacity="0.5"
            transform="translate(688.368 420.31)"
          ></Path>
          <Path
            strokeWidth="3"
            d="M4.317 0L0 24.069"
            data-name="Line 3"
            opacity="0.5"
            transform="translate(718.962 420.31)"
          ></Path>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoHuman2Icon = React.memo(Human2Icon);
export default MemoHuman2Icon;
