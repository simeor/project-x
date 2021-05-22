import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttemptCount(attemptCount + 1);
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      history.push("/login");
    } catch (err) {
      setError(`${err}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-1">Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            {attemptCount < 3 && (
              <Button className="w-100 mt-4" type="submit" diabled={loading}>
                Reset Password
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
