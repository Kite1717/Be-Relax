import * as React from 'react';
import Svg, {G, Path,Circle} from 'react-native-svg';

function HandIcon(props) {
  return (
    <>
   <Svg
      width="98.143"
      height="102.301"
      viewBox="0 0 98.143 102.301"
      {...props}
    >
      <G data-name="Group 80" transform="translate(-367.25 -345.427)">
        <G
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          data-name="Group 70"
        >
          <Path
            d="M429.02 444.908c-11.964 5.226-27.51 1.727-35.091-8.9-7.823-10.971-6.862-27.215-16.806-36.308-2.125-1.943-4.649-3.437-6.634-5.524s-3.406-5.064-2.594-7.828c.963-3.279 4.844-5.02 8.231-4.559s6.3 2.6 8.791 4.945a46.708 46.708 0 019.419 12.472l-.062-39.832c1.069-2.918 4.3-4.636 7.407-4.7a6.529 6.529 0 014.08 1.118 3.719 3.719 0 011.492 3.776l1.272 37.065"
            data-name="Path 88"
            opacity="0.5"
          ></Path>
          <Path
            d="M408.966 354.666c.634-2.744 0-8.864 7.563-8.864a6.536 6.536 0 016.18 4.816l1.64 47.924"
            data-name="Path 89"
            opacity="0.5"
          ></Path>
          <Path
            d="M425.435 355.575c1.711-2.3 3.763-2.277 6.546-1.6a7.53 7.53 0 015.516 5.95l1.23 39.561a47.762 47.762 0 018.705-11.478c2.689-2.609 5.929-5 9.666-5.261s7.862 2.417 7.919 6.163c.062 4-4 6.6-7.269 8.912a25.526 25.526 0 00-7.675 8.019c-2.179 3.847-2.9 8.32-3.721 12.664-.9 4.77-2.021 9.61-4.572 13.742-5.628 9.113-17.527 12.978-28.118 11.379a20.171 20.171 0 01-8.974-3.319c-4.05-2.962-6.2-7.939-7-12.892a22.015 22.015 0 01.762-11.085 13.558 13.558 0 017.393-8.018 22.191 22.191 0 016.592-1.178 34.159 34.159 0 019.541.194 11.786 11.786 0 017.824 5.036c1.539 2.56 1.669 5.7 1.756 8.681.106 3.631-.016 7.8-2.806 10.126a10.954 10.954 0 01-4.977 1.983c-4.508.9-9.675 1.09-13.179-1.887a8.842 8.842 0 011.781-14.653 7.46 7.46 0 016.747-.08 5.619 5.619 0 012.918 5.852 4.528 4.528 0 01-5.229 3.473"
            data-name="Path 90"
            opacity="0.5"
          ></Path>
        </G>
      </G>
    </Svg>
    </>
  );
}

const MemoHandIcon = React.memo(HandIcon);
export default MemoHandIcon;
