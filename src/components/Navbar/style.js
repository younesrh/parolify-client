import styled from "styled-components";

const Navbar = styled.nav`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
  }
  .menu {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        a {
          padding: 8px 16px;
          transition: all ease-in-out 200ms;
          font-weight: 600;
          font-size: 18px;
          position: relative;
          &:before {
            position: absolute;
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 100%;
            left: 0;
            right: 0;
            bottom: -8px;
            background: red transparent;
            margin: 0 auto;
          }
          &:hover {
            color: ${({ theme }) => theme.palette.primary.main};
          }
          &.active {
            color: ${({ theme }) => theme.palette.primary.main};
            &:before {
              background: ${({ theme }) => theme.palette.primary.main};
            }
          }
        }
      }
    }
  }
`;

export const Styled = {
  Navbar,
};
