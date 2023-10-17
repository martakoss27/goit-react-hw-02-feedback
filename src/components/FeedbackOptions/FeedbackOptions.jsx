import { styled } from 'styled-components';

const StyledButton = styled.button`
  font-size: 16px;
  margin: 1em;
  padding: 5px 15px;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: #bf4f74;

  &:hover {
    cursor: pointer;
  }
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, id) => {
        return (
          <StyledButton key={id} type="button" onClick={onLeaveFeedback}>
            {option}
          </StyledButton>
        );
      })}
    </>
  );
};
