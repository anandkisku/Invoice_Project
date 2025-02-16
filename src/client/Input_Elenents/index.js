import { Field, Form } from "formik";
import "./inputs.css";
import { FaSearch } from "react-icons/fa";

const myStyle = {
  width: "100%",
  height: "30px",
  border: "2px solid gray",
  borderRadius: "5px",
};

const myStyle2 = {
  width: "100%",
  height: "35px",
  border: "2px solid gray",
  borderRadius: "5px",
};

function TextInput(props) {
  const { name, type, validation, errors, touched, label } = props;
  return (
    <>
      <div className="label_container">
        {label}
        <span className="error_container">
          {" "}
          {" * "}
          {errors[name] && touched[name] && (
            <div className="error_message">{errors[name]}</div>
          )}{" "}
        </span>{" "}
      </div>
      <Field style={myStyle} name={name} type={type} validate={validation} />
    </>
  );
}

function DateInput(props) {
  const { name, type, validation, errors, touched, label } = props;
  return (
    <>
      <div className="label_container">
        {label}{" "}
        <span className="error_container">
          {" "}
          {" * "}
          {errors[name] && touched[name] && (
            <div className="error_message">{errors[name]}</div>
          )}{" "}
        </span>
      </div>
      <Field style={myStyle} name={name} type={type} validate={validation} />
    </>
  );
}

function SelectInput(props) {
  const { name, type, validation, errors, touched, label, listArray, placeholder } = props;
  return (
    <>
      <div className="label_container">
        {label}{" "}
        <span className="error_container">
          {" "}
          {" * "}
          {errors[name] && touched[name] && (
            <div className="error_message">{errors[name]}</div>
          )}{" "}
        </span>
      </div>
      <Field
        style={myStyle2}
        as={type}
        name={name}
        id={name}
        validate={validation}
      >
        <option value="" label={placeholder} disabled hidden className="placeholder" />
        {listArray.length > 0 &&
          listArray.map((data, index) => {
            return <option key={index} value={data}>{data}</option>;
          })}
      </Field>
    </>
  );
}

function TextInputWrapper(props) {
  const { name, type, Icon } = props;
  return (
    <>
      <Field style={myStyle} name={name} type={type} className="input-field" />
      <Icon className="input-icon" />
    </>
  );
}

export { TextInput, DateInput, SelectInput, TextInputWrapper };
