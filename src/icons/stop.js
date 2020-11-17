import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function stop(props) {
  return (
    <Svg viewBox="0 0 45.936 61.249" {...props}>
      <G
        data-name="Group 77"
        transform="translate(-1534.839 -216.532)"
        fill="#fff">
        <Path
          data-name="Path 78"
          d="M1543.635 277.78a8.822 8.822 0 01-8.8-8.8v-43.652a8.822 8.822 0 018.8-8.8 8.822 8.822 0 018.8 8.8v43.656a8.822 8.822 0 01-8.8 8.796z"
          opacity={0.55}
        />
        <Rect
          data-name="Rectangle 19"
          width={17.593}
          height={61.249}
          rx={8.796}
          transform="translate(1563.183 216.532)"
          opacity={0.55}
        />
      </G>
    </Svg>
  );
}

const Memostop = React.memo(stop);
export default Memostop;
