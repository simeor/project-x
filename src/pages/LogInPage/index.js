import React from "react";
import { LogIn } from "../../components/auth-components/LogIn";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserAvatar } from "../../components";

export const LogInPage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <section
        style={{
          height: "100%",
          backgroundColor: "#F4DDB4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserAvatar size={100} nameOveride={"hello"} />
        <h1>Hello Friend</h1>
        <h3>Sign up now for free to connect</h3>
        <Link to="/signup">
          <Button>Join us</Button>
        </Link>
      </section>
      <section
        style={{
          height: "100vh",
          backgroundColor: "#72BCA5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogIn />
      </section>
    </div>
  );
};
