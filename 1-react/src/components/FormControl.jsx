import React from "react";

const FormControl = ({ label, children, required, htmlFor }) => {
  return (
    <div className="FormControl">
      <label htmlFor={htmlFor}>
        {label}
        {required && <span className="required">*</span>}
      </label>
			{children}
    </div>
  );
};

export default FormControl;
