import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Appstate } from "../App";

const auth = getAuth(app);

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();

  const afterLogin = () => {
    window.alert("login successful");
    console.log(useAppstate.user);
    useAppstate.setUser(true);
    useAppstate.setLogin(true);
    navigate("/dashboard");
  };

  const logItIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(() => afterLogin())
      .catch((err) => window.alert(err));
  };

  return (
    <>
      <div className="loginForm">
        <div className="insidelogin">
          <Form>
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div>
              <Button onClick={logItIn} variant="primary" type="submit">
                Login
              </Button>
              <Link to={"/signup"} className="signuplink">
                <a> Or Signup</a>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
