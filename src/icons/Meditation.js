import * as React from 'react';
import Svg, {G, Path,} from 'react-native-svg';

function MedIcon(props) {
  return (
    <>
     <Svg
     
      width="68.797"
      height="90.545"
      viewBox="0 0 68.797 90.545"
      {...props}
    >
      <G data-name="Group 77" transform="translate(-499 -204.691)">
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          data-name="Group 18"
        >
          <Path
            d="M565.8 278.971c0 8.729-12.462 14.265-32.4 14.265S501 288.4 501 279.671s22.123-9.56 44.169-15.807c13.453-3.811 20.631 6.377 20.631 15.107z"
            data-name="Path 39"
            opacity="0.5"
          ></Path>
          <Path
            d="M553.913 250.972c-5.381 6.39-17.039 6.839-30.716 12.07-10.262 3.925-22.2-6.683-22.2-12.07s12.772-11.995 28.25-11.995 28.136 7.875 24.666 11.995z"
            data-name="Path 40"
            opacity="0.5"
          ></Path>
          <Path
            d="M556.6 235.614c0 3.9-9.145-3.139-22.085-3.139s-23.43-.92-23.43-4.821 10.49-7.062 23.43-7.062 22.085 4.036 22.085 15.022z"
            data-name="Path 41"
            opacity="0.5"
          ></Path>
          <Path
            d="M546.739 213.866c0 3.714-6.515 1.793-12.892 1.793s-7.287-.769-7.287-4.484 1.919-4.484 8.3-4.484 11.879 3.46 11.879 7.175z"
            data-name="Path 42"
            opacity="0.5"
          ></Path>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoMedIcon = React.memo(MedIcon);
export default MemoMedIcon;
