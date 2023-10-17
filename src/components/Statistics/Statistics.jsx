import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 5px;
`;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledUl>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positivePercentage}%</li>
    </StyledUl>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
