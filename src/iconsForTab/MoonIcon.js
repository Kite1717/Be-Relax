import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function MoonIcon(props) {
  return (
    <>
      {props.isFocused ? (
        <Svg width="1em" height="1em" viewBox="0 0 75.327 91.088" {...props}>
          <Path
            data-name="Path 828"
            d="M75.269 77.584a2.584 2.584 0 00-2.161-1.825l-.169-.029-.17.011c-14.444.879-23.31-2.419-23.917-5.03-.79-3.422-5.113-5.9-8.048-7.221 2.09-.817 4.112-1.821 4.967-2.885a2.747 2.747 0 00.565-2.177c-.244-1.62-1.838-3.312-3.27-4.538.788-.4 1.533-.81 2.225-1.238 1.771-1.1 2.625-2.366 2.541-3.767-.121-1.99-2.168-3.142-2.7-3.409-5.617-3.562-6.667-6.423-6.831-7 .219-1.545.51-5.467-1.868-6.788a4.694 4.694 0 01-1.7-2.436c1.252-13.51 6.082-20.326 8.411-23.613.318-.449.594-.839.813-1.173 1.045-1.59.762-2.669.34-3.293C43.306-.298 40.971-.04 39.943.158A45.379 45.379 0 00.003 45.483c0 25.149 20.232 45.609 45.1 45.609 9.527 0 18.9-3.272 27.85-9.724 1.173-.854 2.694-2.171 2.316-3.784zm-53.583-31.4l-1.109-2.787 7.79-3.1 1.109 2.787zm-4.783-4.045l-2.327-1.893a20.938 20.938 0 0114.879-6.745l.132 3a18.267 18.267 0 00-12.685 5.636zm34.159-14.623l5.509 2.4a41.554 41.554 0 001.985 4.983 2.108 2.108 0 001.889 1.285 1.717 1.717 0 00.175-.009c1.105-.109 1.967-1.135 2.56-3.052l2.167-4.846a80.995 80.995 0 013.221-.7c.629-.126 2.543-.511 2.989-2.1a2.522 2.522 0 00-.774-2.465l-.149-.138-5.332-2.767c-.518-1.047-1.825-3.651-2.646-4.98a2.251 2.251 0 00-4.256.213l-2.162 4.768-5.207 2.609c-.7.222-2.357.823-2.359 2.348-.006 1.438 1.456 2.144 2.389 2.449z"
            fill="#b2b2b2"
          />
        </Svg>
      ) : (
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
      )}
    </>
  );
}

const MemoMoonIcon = React.memo(MoonIcon);
export default MemoMoonIcon;
