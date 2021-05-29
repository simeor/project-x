import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import background from "../media/background.jpg";
import { Container } from "react-bootstrap";
import { UserAvatar } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components";

export const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  const handleLogOut = async () => {
    setError("");
    try {
      await logOut();
      history.push("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Container>
        <NavBar />
        <Card>
          <UserAvatar size={55} />
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {currentUser?.email}
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
          </Card.Body>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogOut}>
              Log out
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};
