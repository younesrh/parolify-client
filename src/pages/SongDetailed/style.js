import styled from "styled-components";

const SongDetailed = styled.div`
  .song-cover {
    /* transform: translateY(-128px); */
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.secondary.main};
      opacity: 0.45;
    }
  }
  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    p {
      margin-bottom: 16px;
    }
  }
  h3 {
    /* -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black; */
    color: white;
    text-align: center;
    margin-top: 64px;
    margin-bottom: 64px;
  }
  .lyrics {
    max-width: 720px;
    padding: 64px;
    background: white;
    border-radius: 64px;
    margin: 0 auto;
  }
`;

export const Styled = {
  SongDetailed,
};
