// import React from "react";

// // 1. Define the props type
// interface ButtonProps {
//   label: string;
//   onClick: () => void;
//   disabled?: boolean; // optional prop
// }

// // 2. Use it in a functional component
// const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
//   return (
//     <button onClick={onClick} disabled={disabled}>
//       {label}
//     </button>
//   );
// };
// export default Button


import React, { Component } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface ButtonState {}

class Button extends Component<ButtonProps, ButtonState> {
  render() {
    const { label, onClick, disabled } = this.props;
    return (
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  }
}
export default Button