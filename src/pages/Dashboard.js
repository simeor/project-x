import React, {useState} from "react";
import {Card, Button, Alert} from "react-bootstrap";
import {useAuth} from "../context/AuthContext";
import {Link, useHistory} from "react-router-dom";

export const Dashboard = () => {
const [error, setError] = useState("");
const {currentUser, logOut} = useAuth();
const history = useHistory();

const handleLogOut = async () => {
setError("");
try {
  await logOut();
  history.push("/login")

}catch(err){
  setError(err);
 }
};

    return (
        <>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert> }
                <strong>Email:</strong>{currentUser?.email}
                <Link to="/update-profile" className="btn btn-primary">Update Profile</Link>

            </Card.Body>
         <div className="w-100 text-center mt-2">
         <Button variant="link" onClick={handleLogOut}>Log out</Button>
         </div>
        </Card>
        </>
    )
};