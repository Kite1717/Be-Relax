import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function UploadIcon(props) {
  return (
    <>
      <Svg
     
      width="89.434"
      height="118.509"
      viewBox="0 0 89.434 118.509"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="7"
        data-name="Group 79"
        transform="translate(-1497.704 -548.226)"
      >
        <Path
          d="M1558.4 579.8h15.737a10.537 10.537 0 0110.506 10.507v63.421a10.538 10.538 0 01-10.506 10.507h-63.421a10.538 10.538 0 01-10.507-10.507v-63.421a10.538 10.538 0 0110.507-10.507h18.076"
          data-name="Path 97"
          opacity="0.5"
        ></Path>
        <Path
          d="M0 71.535L0 0"
          data-name="Line 13"
          opacity="0.5"
          transform="translate(1542.3 551.99)"
        ></Path>
        <Path
          d="M1556.056 567.393l-13.756-15.4-13.513 15.289"
          data-name="Path 98"
          opacity="0.5"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoUploadIcon = React.memo(UploadIcon);
export default MemoUploadIcon;
