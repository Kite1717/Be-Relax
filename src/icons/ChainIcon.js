import * as React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';

function ChainIcon(props) {
    return (
        <>
            <Svg

                width="176.6"
                height="78.251"
                viewBox="0 0 176.6 78.251"
                {...props}
            >
                <G
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="5"
                    data-name="Group 77"
                    transform="translate(-820.454 -884.329)"
                >
                    <Circle
                        cx="14.617"
                        cy="14.617"
                        r="14.617"
                        data-name="Ellipse 11"
                        opacity="0.5"
                        transform="rotate(-80.825 972.603 -4.713)"
                    ></Circle>
                    <Circle
                        cx="14.617"
                        cy="14.617"
                        r="14.617"
                        data-name="Ellipse 12"
                        opacity="0.5"
                        transform="rotate(-82.42 963.949 -44.95)"
                    ></Circle>
                    <Circle
                        cx="14.617"
                        cy="14.617"
                        r="14.617"
                        data-name="Ellipse 13"
                        opacity="0.5"
                        transform="rotate(-76.632 1058.522 -107.957)"
                    ></Circle>
                    <Circle
                        cx="14.617"
                        cy="14.617"
                        r="14.617"
                        data-name="Ellipse 14"
                        opacity="0.5"
                        transform="rotate(-76.802 1057.002 -148.364)"
                    ></Circle>
                    <Path
                        d="M0 23.907L40.072 0"
                        data-name="Line 10"
                        opacity="0.5"
                        transform="translate(848.164 912.097)"
                    ></Path>
                    <Path
                        d="M0 0L17.17 12.603"
                        data-name="Line 11"
                        opacity="0.5"
                        transform="translate(908.141 913.901)"
                    ></Path>
                    <Path
                        d="M0 11.533L20.694 0"
                        data-name="Line 12"
                        opacity="0.5"
                        transform="translate(946.755 914.135)"
                    ></Path>
                </G>
            </Svg>
        </>
    );
}

const MemoChainIcon = React.memo(ChainIcon);
export default MemoChainIcon;
