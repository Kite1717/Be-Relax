import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Music(props) {
  return (
    <>
      {props.isFocused ? (
        <Svg width="1em" height="1em" viewBox="0 0 78.428 93.006" {...props}>
          <G data-name="Group 383">
            <G data-name="Group 382">
              <G data-name="Group 381">
                <Path
                  data-name="Path 664"
                  d="M25.093 65.685l-.42-44.62s-1.17-5.56 3.76-7.68S69.423.475 69.423.475s7.66-2.71 7.67 4.82c.01 6.46.75 43.61.96 53.95h.02c.061 2.46.561 4.6.261 7.15-.96 8.11-9.11 13.82-18.21 12.74s-15.69-8.52-14.74-16.64 9.12-13.82 18.21-12.74a17.956 17.956 0 016.57 2.07l-.44-35.07-37.55 12.12.86 51.26c-.961 8.11-9.11 13.82-18.211 12.74S-.866 84.355.094 76.235s9.11-13.82 18.21-12.74a18.139 18.139 0 016.789 2.19z"
                  fill="#b2b2b2"
                />
              </G>
            </G>
          </G>
        </Svg>
      ) : (
        <Svg width="1em" height="1em" viewBox="0 0 82.422 97.033" {...props}>
          <G
            data-name="Group 16"
            opacity={0.5}
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth={4}>
            <Path
              data-name="Path 24"
              d="M35.048 82.146c-.959 8.113-9.111 13.818-18.208 12.743S1.146 86.364 2.105 78.25s9.112-13.819 18.209-12.743a17.943 17.943 0 018.912 3.6"
            />
            <Path
              data-name="Path 25"
              d="M80.085 61.253c.056 2.462.56 4.608.259 7.152-.959 8.114-9.111 13.819-18.208 12.743S46.442 72.624 47.401 64.51s9.112-13.819 18.209-12.743a18.046 18.046 0 018.194 3.07"
            />
            <Path
              data-name="Path 26"
              d="M27.11 67.705l-.425-44.629s-1.165-5.554 3.759-7.681S71.437 2.487 71.437 2.487s7.657-2.705 7.67 4.82 1.009 56.626 1.009 56.626"
            />
            <Path
              data-name="Path 27"
              d="M35.053 82.146l-.86-51.261 37.544-12.112.446 35.067"
            />
          </G>
        </Svg>
      )}
    </>
  );
}

const MemoMusic = React.memo(Music);
export default MemoMusic;
