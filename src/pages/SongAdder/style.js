import styled from "styled-components";

const SongAdder = styled.div`
  .hero-title {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
    margin-top: 64px;
  }
  .illustration {
    margin: 0 auto;
    display: flex;
    width: 420px;
    margin-top: 64px;
  }

  .search-placeholder {
    background: ${({ theme }) => theme.palette.primary.light};
    height: 64px;
    width: 720px;
    border-radius: 16px;
    margin: 0 auto;
    opacity: 25%;
    margin-top: 32px;
  }
`;

export const Styled = {
  SongAdder,
};
