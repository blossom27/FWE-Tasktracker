import styled from "styled-components";

export const NormalButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0px;
  border-radius: 5px;
  color: #ffffff;
  line-height: 22.4px;
  padding: 6.2px 12.4px;
  text-align: center;
  width: 10%;
  font-weight: 500;
  transition-duration: 250ms;
  outline: 0;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;