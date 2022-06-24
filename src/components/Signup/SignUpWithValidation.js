import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { cityOptions } from "./cityList";

const SignUpWithValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    gender: "",
    tnCAgreed: false,
  });

  const [formDataErrors, setFormDataErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    gender: "",
    tnCAgreed: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  //   useEffect(()=>{
  //     validate()
  //   }, [formData])

  const validate = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    let { name, email, password, confirmPassword, gender, city, tnCAgreed } =
      formData;

    if (name === "") {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        name: "Please enter a valid name",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        name: "",
      }));
    }

    if (email === "" || email.startsWith('@') || !email.includes('@') || !email.includes('.') || email.slice(email.lastIndexOf('.')+1).length < 2 ) {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        email: "Please enter a valid email",
      }));
    }
    else{
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          email: "",
        }));
      }

      if (password === "" || password.length < 8) {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          password: "Please enter a valid password (Minimum 8 characters)",
        }));
      } else {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          password: "",
        }));
      }

      if (confirmPassword === "" || confirmPassword.length < 8 || confirmPassword !== password ) {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          confirmPassword: "Confirm Password does not match your password",
        }));
      } else {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          confirmPassword: "",
        }));
      }

      if (gender === "") {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          gender: "Please select a gender",
        }));
      } else {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          gender: "",
        }));
      }

      if (city === "") {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          city: "Please choose a city",
        }));
      } else {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          city: "",
        }));
      }

      if (!tnCAgreed) {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          tnCAgreed: "Please agree Terms and conditions",
        }));
      } else {
        setFormDataErrors((formDataErrors) => ({
          ...formDataErrors,
          tnCAgreed: "",
        }));
      }
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [city, setCity] = useState("");

  return (
    <Form style={{ width: "500px", margin: "50px auto" }}>
      <h1 className='display-4'>
      Sign Up
    </h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.name ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.name ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.name}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.email ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.email ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.email}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.password ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.password ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.password}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.confirmPassword ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.confirmPassword ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.confirmPassword}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <br />

        {["Male", "Female", "Others"].map((gender, index) => (
          <Form.Check
            inline
            label={gender}
            name="gender"
            type="radio"
            id={`inline-${index}`}
            onClick={() => setFormData({ ...formData, gender: gender })}
          />
        ))}
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.gender ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.gender ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.gender}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        >
          {cityOptions.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </Form.Select>
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.city ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.city ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.city}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
        style={{ textAlign: "left" }}
      >
        <Form.Check
          type="checkbox"
          label="You agree to terms and conditions"
          onClick={(e) =>
            setFormData({ ...formData, tnCAgreed: e.target.checked })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.tnCAgreed ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.tnCAgreed ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.tnCAgreed}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        style={{ width: "100%" }}
        onClick={(e) => validate(e)}
      >
        Log In
      </Button>
    </Form>
  );
};

export default SignUpWithValidation;
