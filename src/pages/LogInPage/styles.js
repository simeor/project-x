import styled from "styled-components";
import background from "../../media/background.jpg";

export const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  postition: relative;
`;

export const LeftSection = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.pink + 95};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSection = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
