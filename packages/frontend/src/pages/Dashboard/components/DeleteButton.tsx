import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 48px;
  border: 0px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const DeleteButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <StyledButton {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        focusable="false"
        style={{ fill: "#fff", height: "28px", width: "28px" }}
      >
        <path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z" />
      </svg>
    </StyledButton>
  );
};
