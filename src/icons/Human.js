import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function HumanIcon(props) {
  return (
    <>
   <Svg
   
      width="68.548"
      height="140.025"
      viewBox="0 0 68.548 140.025"
      {...props}
    >
      <G data-name="Group 81" transform="translate(-525.239 -361.941)">
        <G data-name="Group 78">
          <G
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            data-name="Group 47"
          >
            <Circle
              cx="10.139"
              cy="10.139"
              r="10.139"
              strokeWidth="3"
              data-name="Ellipse 1"
              opacity="0.5"
              transform="rotate(-76.776 528.975 -153.55)"
            ></Circle>
            <Path
              strokeWidth="3"
              d="M574.943 420.554l-5.308 23.571 19.411 48.995a5.825 5.825 0 11-10.419 5.207l-20.638-41.872-21.74 41.345a5.75 5.75 0 01-10-5.678l19.894-46.654a124.754 124.754 0 00-.788-25.893c-1.718-12.7-5.252-26.348.545-37.779 2.949-5.815 8.085-10.321 13.837-13.39s12.121-4.8 18.513-6.093"
              data-name="Path 48"
              opacity="0.5"
            ></Path>
            <Path
              strokeWidth="3"
              d="M552.394 404.721l22.984 6.311c3.09.848 6.267 1.739 8.808 3.691 2.432 1.867 4.078 4.551 5.67 7.172l3.062 5.043a1.884 1.884 0 01-.244 2.768l-12.041 14.419"
              data-name="Path 49"
              opacity="0.5"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoHumanIcon = React.memo(HumanIcon);
export default MemoHumanIcon;
