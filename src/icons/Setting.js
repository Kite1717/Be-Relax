import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function SettingIcon(props) {
  return (
    <>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="88.548"
      height="87.537"
      viewBox="0 0 88.548 87.537"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        data-name="Group 587"
        transform="translate(-10434.899 -3311.71)"
      >
        <Circle
          cx="10.942"
          cy="10.942"
          r="10.942"
          strokeWidth="3"
          data-name="Ellipse 45"
          opacity="0.5"
          transform="rotate(-80.783 7178.223 -4465.821)"
        ></Circle>
        <Path
          strokeWidth="0.75"
          d="M10449.173 3340.147v59.1"
          data-name="Path 639"
          opacity="0.5"
        ></Path>
        <Circle
          cx="10.942"
          cy="10.942"
          r="10.942"
          strokeWidth="3"
          data-name="Ellipse 46"
          opacity="0.5"
          transform="rotate(-80.783 7221.844 -4461.127)"
        ></Circle>
        <Path
          strokeWidth="0.75"
          d="M10481.173 3387.885v11.362"
          data-name="Path 640"
          opacity="0.5"
        ></Path>
        <Path
          strokeWidth="0.75"
          d="M10481.173 3317.147v40.9"
          data-name="Path 641"
          opacity="0.5"
        ></Path>
        <Circle
          cx="10.942"
          cy="10.942"
          r="10.942"
          strokeWidth="3"
          data-name="Ellipse 47"
          opacity="0.5"
          transform="rotate(-80.783 7218.214 -4492.582)"
        ></Circle>
        <Path
          strokeWidth="0.75"
          d="M10509.173 3358.4v40.846"
          data-name="Path 642"
          opacity="0.5"
        ></Path>
        <Path
          strokeWidth="0.75"
          d="M10509.173 3317.147v10.783"
          data-name="Path 643"
          opacity="0.5"
        ></Path>
      </G>
    </Svg>
    </>
  );
}

const MemoSettingIcon = React.memo(SettingIcon);
export default MemoSettingIcon;
