import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function play(props) {
  return (
    <Svg height="1em" viewBox="0 0 16 16" width="1em" {...props}>
      <Path d="M1 14c0 .547.461 1 1 1 .336 0 .672-.227 1-.375L14.258 9c.273-.133.742-.406.742-1s-.469-.867-.742-1L3 1.375C2.672 1.227 2.336 1 2 1c-.539 0-1 .453-1 1v12z" />
    </Svg>
  );
}

const Memoplay = React.memo(play);
export default Memoplay;
