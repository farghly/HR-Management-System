const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <div className="group">
      {label && <label id={id}>{label}</label>}
      <input {...otherProps} className="form-input" />
    </div>
  );
};

export default FormInput;
