import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function MedidationIcon(props) {
  return (
    <>
      {props.isFocused ? (
        <Svg width="1em" height="1em" viewBox="0 0 68.796 90.545" {...props}>
          <G data-name="Group 564">
            <G data-name="Group 560">
              <Path
                data-name="Path 948"
                d="M34.398 90.545c-21.861 0-34.4-5.673-34.4-15.565 0-7.714 11.048-10.02 26.341-13.213 5.943-1.241 12.679-2.647 19.283-4.517 7.818-2.216 13.078.056 16.115 2.352a18.636 18.636 0 017.057 14.678c.002 10.032-13.178 16.265-34.396 16.265z"
                fill="#b2b2b2"
              />
            </G>
            <G data-name="Group 561">
              <Path
                data-name="Path 949"
                d="M19.487 61.2a20.834 20.834 0 01-11.688-3.959c-4.665-3.21-7.8-7.615-7.8-10.96 0-7.324 14.418-13.995 30.25-13.995 13.117 0 24.418 5.352 26.744 10.351a4.465 4.465 0 01-.551 4.932c-3.866 4.592-10.132 6.3-18.066 8.457a138.721 138.721 0 00-13.466 4.193 15.117 15.117 0 01-5.423.981z"
                fill="#b2b2b2"
              />
            </G>
            <G data-name="Group 562">
              <Path
                data-name="Path 950"
                d="M56.397 34.101a19.8 19.8 0 01-5.375-1.309c-3.893-1.27-9.224-3.008-15.5-3.008-18.3 0-25.43-1.912-25.43-6.82 0-6.227 13.183-9.063 25.43-9.063 19.906 0 24.085 9.257 24.085 17.021a3.049 3.049 0 01-1.211 2.582 3.262 3.262 0 01-1.999.597z"
                fill="#b2b2b2"
              />
            </G>
            <G data-name="Group 563">
              <Path
                data-name="Path 951"
                d="M43.808 13.466c-1.207 0-2.555-.11-4.019-.23-1.617-.131-3.288-.268-4.943-.268-5.778 0-9.286-.436-9.286-6.484C25.56 0 31.269 0 35.86 0c7.526 0 13.883 4.2 13.883 9.174a3.886 3.886 0 01-1.227 2.963c-1.126 1.034-2.729 1.329-4.708 1.329z"
                fill="#b2b2b2"
              />
            </G>
          </G>
        </Svg>
      ) : (
        <Svg width="1em" height="1em" viewBox="0 0 68.797 90.545" {...props}>
          <G
            data-name="Group 18"
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth={4}>
            <Path
              data-name="Path 39"
              d="M66.8 74.28c0 8.729-12.462 14.265-32.4 14.265S2 83.709 2 74.98s22.123-9.56 44.169-15.807C59.622 55.362 66.8 65.55 66.8 74.28z"
              opacity={0.5}
            />
            <Path
              data-name="Path 40"
              d="M54.913 46.281c-5.381 6.39-17.039 6.839-30.716 12.07-10.262 3.925-22.2-6.683-22.2-12.07s12.772-11.995 28.25-11.995 28.136 7.875 24.666 11.995z"
              opacity={0.5}
            />
            <Path
              data-name="Path 41"
              d="M57.6 30.923c0 3.9-9.145-3.139-22.085-3.139s-23.43-.92-23.43-4.821 10.49-7.062 23.43-7.062S57.6 19.937 57.6 30.923z"
              opacity={0.5}
            />
            <Path
              data-name="Path 42"
              d="M47.739 9.175c0 3.714-6.515 1.793-12.892 1.793s-7.287-.769-7.287-4.484S29.479 2 35.86 2s11.879 3.46 11.879 7.175z"
              opacity={0.5}
            />
          </G>
        </Svg>
      )}
    </>
  );
}

const MemoMedidationIcon = React.memo(MedidationIcon);
export default MemoMedidationIcon;
