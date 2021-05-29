import React, { useState } from "react";
import { LogIn } from "../../components/auth-components/LogIn";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserAvatar } from "../../components";
import { changeIconOnMouseMove } from "./utils";
import { MainSection, LeftSection, RightSection } from "./styles";
import { ReactComponent as Wave } from "../../media/wave.svg";

export const LogInPage = () => {
  const [mouse, setMouse] = useState(0);

  return (
    <>
      <Wave
        style={{
          position: "absolute",
          top: -50,
          left: 0,
          fill: "white",
          pointerEvents: "none",
        }}
      />
      <MainSection
        onMouseMove={(e) => {
          changeIconOnMouseMove(e, setMouse);
        }}
      >
        <LeftSection>
          <UserAvatar size={120} nameOveride={mouse} />
          <h1>Hello New Friend</h1>
          <h3>Sign up now for free</h3>
          <Link to="/signup">
            <Button>Join us</Button>
          </Link>
        </LeftSection>
        <RightSection>
          <UserAvatar size={120} nameOveride={mouse + "h"} />
          <h1>Hello Old Friend</h1>
          <h3>Lets Go Inside</h3>
          <LogIn />
        </RightSection>
        <Wave
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: "rotate(180deg)",
            fill: "#EDB92D",
            pointerEvents: "none",
          }}
        />
      </MainSection>
    </>
  );
};
