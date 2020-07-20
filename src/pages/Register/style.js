import styled from "styled-components";

const Register = styled.div`
  form {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
    /* align-items: center; */
    margin: 0 auto;
    .form-controlers {
      width: 100%;
      display: flex;
      align-items: space-between;
      justify-content: space-between;
    }
  }
`;

export const Styled = {
  Register,
};
