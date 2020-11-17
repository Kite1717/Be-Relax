import * as React from 'react';
import Svg, {G, Path,} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <>
      <Svg width="1em" height="1em" viewBox="0 0 75.341 91.09" {...props}>
        <G
          data-name="Group 15"
          opacity={0.5}
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={3}>
          <Path
            data-name="Path 20"
            d="M34.812 63.859s8.189-2.2 9.787-4.194-4.422-6.1-4.422-6.1"
          />
          <Path
            data-name="Path 21"
            d="M42.505 66.356a5.918 5.918 0 014.893 4.694c1 4.294 12.283 6.99 25.465 6.191 0 0 2.629.438-.792 2.9-7.7 5.55-16.785 9.445-26.964 9.445-24.082 0-43.6-19.752-43.6-44.116a43.941 43.941 0 0138.67-43.837s4.429-.891 2.531 2-8.089 9.886-9.487 25.765c0 0 .7 2.6 2.5 3.6s1.073 5.492 1.073 5.492.325 3.695 7.615 8.289c0 0 4.294 2 .1 4.593a36.025 36.025 0 01-8.988 3.8"
          />
          <Path
            data-name="Path 22"
            d="M15.738 41.19a19.546 19.546 0 0113.781-6.191"
          />
          <Path data-name="Line 1" d="M21.131 44.786l7.789-3.096" />
          <Path
            data-name="Path 23"
            d="M51.589 24.117l5.792-2.9 2.4-5.293s.6-1.6 1.6 0 2.8 5.293 2.8 5.293l5.592 2.9s1.5 1.4-1.5 2-3.994.9-3.994.9l-2.5 5.592s-1 3.3-1.9 1.6a47.135 47.135 0 01-2.1-5.393l-6.192-2.7s-3.193-1.004.002-1.999z"
          />
        </G>
      </Svg>
    </>
  );
}

const MemoHomeIcon = React.memo(HomeIcon);
export default MemoHomeIcon;
