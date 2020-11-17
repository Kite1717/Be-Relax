import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function DownloadIcon(props) {
  return (
    <>
      <Svg
      
      
      width="89.009"
      height="66.006"
      viewBox="0 0 89.009 66.006"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="3"
        data-name="Group 78"
        transform="translate(-795.524 -565.671)"
      >
        <Path
          d="M797.024 607.372v10.8a12.035 12.035 0 0012 12h62.009a12.035 12.035 0 0012-12v-10.8"
          data-name="Path 64"
        ></Path>
        <Path
          d="M0 0L0 41.701"
          data-name="Line 6"
          transform="translate(840.029 565.671)"
        ></Path>
        <Path
          d="M824.318 589.779l15.711 17.593 15.434-17.461"
          data-name="Path 65"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoDownloadIcon = React.memo(DownloadIcon);
export default MemoDownloadIcon;
