import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Avatar from "boring-avatars";

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
    <>
      <Card>
        <Avatar
          size={100}
          name={currentUser?.email}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {currentUser?.email}
          {console.log(currentUser)}
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
    </>
  );
};
