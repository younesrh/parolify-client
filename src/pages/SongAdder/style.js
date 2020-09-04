import styled from "styled-components";

const SongAdder = styled.div`
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
      align-items: center;
      justify-content: space-between;
      .upload-progress {
        display: flex;
        align-items: center;
      }
    }
  }
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

  .file-input {
    svg {
      fill: ${({ theme }) => theme.palette.text.primary} !important;
    }
  }
`;

export const Styled = {
  SongAdder,
};
