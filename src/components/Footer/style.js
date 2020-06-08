import styled from "styled-components";

const Footer = styled.footer`
  padding: 16px 0 32px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 128px;
  .copyright {
    display: flex;
    align-items: center;
  }
  .links {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        a {
          display: flex;
          padding: 8px 16px;
          transition: all ease-in-out 200ms;
          font-weight: 600;
          font-size: 18px;
          position: relative;
        }
      }
    }
  }
`;

export const Styled = {
  Footer,
};
