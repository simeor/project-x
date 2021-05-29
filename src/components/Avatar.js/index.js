import React from "react";
import Avatar from "boring-avatars";
import { useAuth } from "../../context/AuthContext";
import "./styles.css";

export const UserAvatar = ({ size = 40, nameOveride = "" }) => {
  const { currentUser } = useAuth();
  return (
    <Avatar
      className={currentUser ? "" : "fade-in"}
      size={size}
      name={currentUser?.email || nameOveride}
      variant="beam"
      colors={["#72BCA5", "#F4DDB4", "#F2AF2B", "#BC0C27", "#EA294C"]}
    />
  );
};
