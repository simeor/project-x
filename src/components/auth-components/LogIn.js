import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { UserAvatar } from "../Avatar.js";

export const LogIn = () => {
  const [error, setError] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttemptCount(attemptCount + 1);
    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(`${err}`);
    }
    setLoading(false);
  };

  const [emailInput, setEmailInput] = useState("");

  return (
    <>
      <h2 className="text-center mb-4">Log In</h2>
      <div className=" d-flex align-items-center justify-content-center ">
        <UserAvatar size={90} nameOveride={emailInput} />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label className="mt-1">Email</Form.Label>
          <Form.Control
            type="email"
            required
            ref={emailRef}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label className="mt-1">Password</Form.Label>
          <Form.Control type="password" required ref={passwordRef} />
        </Form.Group>
        {attemptCount < 3 && (
          <Button className="w-100 mt-4" type="submit" diabled={loading}>
            Log In
          </Button>
        )}
      </Form>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password ?</Link>
      </div>

      <div className="w-100 text-center mt-2">
        Dont have an account ? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};
