import { styled } from 'styled-components';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};
const StyledSection = styled.section`
  text-align: center;
`;
