import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function TimeBarIcon(props) {
  return (
    <>

<Svg
     {...props}
      width="768.418"
      height="50.498"
      viewBox="0 0 768.418 50.498"
    >
      <G data-name="Group 88" transform="translate(-1109.704 -474.442)">
        <G data-name="Group 87">
          <G data-name="Group 86">
            <G data-name="Group 85">
              <G data-name="Group 75">
                <Path
                  fill="#706f6f"
                  d="M1109.7 508.325v-17.593h759.622a8.822 8.822 0 018.8 8.8 8.822 8.822 0 01-8.8 8.8z"
                  data-name="Path 95"
                  opacity="0.55"
                ></Path>
                <Path
                  fill="#0098ff"
                  d="M0 0H32.009V17.593H0z"
                  data-name="Rectangle 20"
                  transform="translate(1109.704 490.732)"
                ></Path>
              </G>
              <Circle
                cx="25.249"
                cy="25.249"
                r="25.249"
                fill="#0098ff"
                data-name="Ellipse 15"
                transform="translate(1140.577 474.442)"
              ></Circle>
            </G>
          </G>
        </G>
      </G>
    </Svg>
    
    </>
  );
}

const MemoTimeBarIcon = React.memo(TimeBarIcon);
export default MemoTimeBarIcon;
