import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { TextInput } from "../Input_Elenents";
import { dataRequired, validatePassword } from "./allDatas";
import "./form.css";
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();
  const logInData = JSON.parse(sessionStorage.getItem("userInfo"));

  useEffect(() => {
    if (logInData) {
      navigate("/");
    }
  }, [logInData]);
  //Test

  return (
    <div className="Login_form_container">
      <h2>Login</h2>
      <div id="login_form">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify(values)
            )
            setTimeout(()=>{
              navigate("/");
            },100) 
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <TextInput
                  name={"username"}
                  type={"text"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Username"}
                />
              </div>

              <div>
                <TextInput
                  name={"password"}
                  type={"password"}
                  validation={validatePassword}
                  errors={errors}
                  touched={touched}
                  label={"Password"}
                />
              </div>
              <button id="login_btn">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
