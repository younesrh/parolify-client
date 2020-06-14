import styled from "styled-components";

const SongItem = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 620px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[20]};

  .image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    padding: 32px;
    padding-bottom: 64px;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      h6 {
        padding-inline-end: 8px;
        line-height: 1.2;
      }
    }

    .rating {
      margin-bottom: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .stars {
        margin-inline-end: 8px;
        .MuiRating-iconActive,
        .MuiRating-pristine,
        .MuiRating-iconFilled,
        .MuiRating-iconHover,
        .MuiRating-iconFocus,
        .MuiRating-root.Mui-disabled {
          opacity: 1;
          svg {
            fill: ${({ theme }) => theme.palette.primary.main};
          }
        }
        .MuiRating-root {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }

    .lyrics-preview {
      font-size: 1rem;
      line-height: 1.65;
    }
  }
`;

export const Styled = {
  SongItem,
};
