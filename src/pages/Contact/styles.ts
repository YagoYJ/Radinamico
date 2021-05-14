import styled from "styled-components";
import theme from "../../styles/theme";

export const ContactPage = styled.div`
  width: 100%;
  flex: 1;
`;

export const MainContainer = styled.div`
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.9rem;
  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const Separator = styled.div`
  width: 20%;
  border: 1px solid ${theme.colors.black};
  margin: 10px 0;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin: 50px auto;
  @media (min-width: 900px) {
    margin-top: 100px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 8px 10px;
  border: 2px solid ${theme.colors.darkGray};
  margin-bottom: 10px;

  &:hover {
    border-width: 1px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 8px 10px;
  border: 2px solid ${theme.colors.darkGray};
  margin-bottom: 10px;

  &:hover {
    border-width: 1px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 100px;
  background-color: ${theme.colors.darkGray};
  padding: 10px;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;
