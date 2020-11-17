import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function ThemeIcon(props) {
  return (
    <>
      <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 94.539 58.145"
      
    >
      <G data-name="Group 585" transform="translate(-134.535 -832.572)">
        <G data-name="Group 581">
          <G data-name="Group 582">
            <G
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="3"
              data-name="Group 357"
              opacity="0.5"
              transform="translate(-10296.305 -2262.294)"
            >
              <Path
                d="M10475.238 3128.01l-12.059-22.937c-.785-1.492-2.046-3.229-3.7-2.892-1.058.216-1.732 1.223-2.292 2.144q-12.315 20.294-24.632 40.585a6.4 6.4 0 00-1.321 3.983c.4 3.009 4.364 3.753 7.4 3.743l80.128-.275c2.216-.008 4.848-.246 5.938-2.174 0 0 1.825-.505-3.7-9.1l-14.43-24.869s-1.535-3.684-5.219.921l-3.379 5.219"
                data-name="Path 636"
              ></Path>
              <Path
                d="M10482.532 3098.076c2.129 3.6 4.1 7.3 6.064 11l12.873 24.177"
                data-name="Path 637"
              ></Path>
              <Path
                d="M10470.215 3113.276q3.353-7.846 6.819-15.643c.442-1 1.031-2.114 2.1-2.344a2.367 2.367 0 012.084.737 6.98 6.98 0 011.238 1.931"
                data-name="Path 638"
              ></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoThemeIcon = React.memo(ThemeIcon);
export default MemoThemeIcon;
