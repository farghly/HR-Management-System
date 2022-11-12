const Button = ({ children, buttonType, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};
export default Button;
