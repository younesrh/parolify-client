import styled from 'styled-components';

const About = styled.div`
  max-width: 640px;
  margin: 0 auto;
  h6 {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 700;
  }
  p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 24px;
  }
`;

export const Styled = {
  About,
};
