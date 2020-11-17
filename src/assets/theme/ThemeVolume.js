import * as React from 'react';
import Svg, {G, Path,Circle,Text,TSpan} from 'react-native-svg';

function VolumeIcon(props) {
  return (
    <>
     <Svg
     
      width="948.459"
      height="75.964"
      viewBox="0 0 948.459 75.964"
      {...props}
    >
      <G data-name="Group 579" transform="translate(-89.069 -875.798)">
        <G data-name="Group 578">
          <G
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="3"
            data-name="Group 274"
            opacity="0.5"
            transform="translate(-10296.305 -4305.657)"
          >
            <Path
              d="M10429.77 5223.5l-12.058-22.938c-.785-1.492-2.046-3.228-3.7-2.891-1.057.216-1.731 1.222-2.291 2.144l-24.632 40.584a6.392 6.392 0 00-1.32 3.984c.4 3.009 4.363 3.753 7.4 3.742l80.129-.275c2.214-.007 4.848-.245 5.938-2.173 0 0 1.824-.505-3.7-9.1l-14.43-24.868s-1.535-3.685-5.22.921l-3.377 5.219"
              data-name="Path 474"
            ></Path>
            <Path
              d="M10437.064 5193.57c2.129 3.6 4.1 7.3 6.064 11l12.873 24.177"
              data-name="Path 475"
            ></Path>
            <Path
              d="M10424.747 5208.77q3.353-7.846 6.819-15.644c.442-1 1.03-2.114 2.1-2.343a2.366 2.366 0 012.084.737 7.012 7.012 0 011.238 1.93"
              data-name="Path 476"
            ></Path>
          </G>
        </G>
        <Text
          fill="#fff"
          data-name="Tema Ses"
          fontFamily="Helvetica"
          fontSize="42"
          transform="translate(190.134 925.473)"
        >
          <TSpan x="0" y="0">
            Tema Ses
          </TSpan>
        </Text>
        <Path
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="5"
          d="M0 0L103.924 0"
          data-name="Line 37"
          opacity="0.5"
          transform="translate(847.942 913.78)"
        ></Path>
        <Path
          fill="none"
          stroke="#f9b233"
          strokeMiterlimit="10"
          strokeWidth="5"
          d="M0 0L306.814 0"
          data-name="Line 39"
          opacity="0.5"
          transform="translate(482.052 913.78)"
        ></Path>
        <Circle
          cx="26.57"
          cy="26.57"
          r="26.57"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="5"
          data-name="Ellipse 30"
          opacity="0.5"
          transform="rotate(-22.5 2652.655 -1520.316)"
        ></Circle>
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="5"
          data-name="Group 276"
          opacity="0.5"
          transform="translate(-10296.305 -4305.657)"
        >
          <Path
            d="M10742.493 5244.1l-9.791-12.61H10716v-26.5h15.885l10.612-12.61z"
            data-name="Path 477"
          ></Path>
          <G data-name="Group 275" transform="translate(10753.979 5209.436)">
            <Path d="M0 0L17.614 17.614" data-name="Line 40"></Path>
            <Path d="M17.614 0L0 17.614" data-name="Line 41"></Path>
          </G>
        </G>
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="5"
          data-name="Group 277"
          opacity="0.5"
          transform="translate(-10296.305 -4305.657)"
        >
          <Path
            d="M11288.8 5245.295l-9.791-12.61h-16.709v-26.5h15.885l10.612-12.609z"
            data-name="Path 478"
          ></Path>
          <Path
            d="M11306.138 5194.242a25.194 25.194 0 110 50.389"
            data-name="Path 479"
          ></Path>
          <Path
            d="M11304.461 5202.99a16.446 16.446 0 110 32.893"
            data-name="Path 480"
          ></Path>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoVolumeIcon = React.memo(VolumeIcon);
export default MemoVolumeIcon;
