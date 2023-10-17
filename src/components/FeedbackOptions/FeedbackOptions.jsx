export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, id) => {
        return (
          <button key={id} type="button">
            {option}
          </button>
        );
      })}
    </>
  );
};
