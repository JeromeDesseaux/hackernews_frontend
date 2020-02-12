import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: rgba(51, 51, 255, 1) !important;
  }
`;

export const Container = styled.div`
  width: 60%;
`;

export const NewsCardsContainer = styled.div`
  margin-top: 30px;
`;

export const CardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SpacedWrapper = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

export const FormErrorContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;