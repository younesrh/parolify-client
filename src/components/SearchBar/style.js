import styled from "styled-components";

const SearchBar = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 720px;
    .search-field {
      height: 64px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        height: 100%;
        padding: 8px 16px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.palette.grey[100]};
        outline: none;
        border: 3px solid ${({ theme }) => theme.palette.grey[500]};
        font-size: 16px;
        &:hover,
        &:focus {
          border-color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    .search-button {
      margin-inline-start: 8px;

      svg {
        width: 32px;
        height: 32px;
        fill: ${({ theme }) => theme.palette.grey[700]};
      }
    }
  }
`;

export const Styled = {
  SearchBar,
};
