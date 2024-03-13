import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.email === " " || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }
    if (formData.password === " " || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password length at least 6 char";
    }

    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              alert("Login Successfully");
              navigate("/dashboard");
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password;";
            }
          } else if (formData.email !== " ") {
            isvalid = false;
            validationErrors.email = "Wrong Email;";
          }
        });
        setErrors(validationErrors);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));
  };

  return (

    <div>   




{/* Main */}
    <div class="container" id="log">
      <div class="row">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="signup-form">
            <form
              class="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 class="mb-5 text-secondary">Login Account</h4>
              {/* {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                  {errors.fname}; {errors.lname}; {errors.email};{" "}
                  {errors.password}; {errors.cpassword}
                </span>
              )} */}
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label>
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                    <span className="text-danger">{errors.email}</span>
                </div>

                <div class="mb-3 col-md-12">
                  <label>
                    Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                    <span className="text-danger">{errors.password}</span>
                </div>

                <div class="col-md-12">
                  <button class="btn btn-primary float-end">Login Page</button>
                </div>
              </div>
              <p class="text-center mt-3 text-secondary">
                If you don't have account, Please{" "}
                <Link to="/registration">Registration</Link>
              </p>
              <p className="text-center">OR</p>
           
     
            </form>
          </div>
        </div>
      </div>
    </div>
   

    

    </div>
  );
};

export default Login;
