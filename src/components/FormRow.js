const FormRow = ({ labelName, type, name, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelName || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="form-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
