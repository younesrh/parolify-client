import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
  /* background: white; */
  z-index: 900000;

  &.--moving {
    background: white;
    .arrow-button {
      svg {
        width: 36px;
        height: 36px;
        fill: black !important;
      }
    }
  }

  .navbar-inner {
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &.--detailed {
      .logo {
        display: flex;
        border-radius: 100px;
        border: 2px solid white;
        background: white;
        padding-inline-end: 1rem;
        overflow: hidden;
      }
      .menu {
        ul {
          li {
            .arrow-button {
              svg {
                width: 36px;
                height: 36px;
                fill: white;
              }
            }
            a,
            span {
              color: white;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: red; */
    span {
      margin-inline-start: 16px;
    }
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
            background: transparent;
            margin: 0 auto;
          }
          &:hover {
            color: ${({ theme }) => theme.palette.secondary.main};
          }
          &.active {
            color: ${({ theme }) => theme.palette.secondary.main};
            &:before {
              background: ${({ theme }) => theme.palette.secondary.main};
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
