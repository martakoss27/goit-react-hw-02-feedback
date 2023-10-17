export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, id) => {
        return (
          <button key={id} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        );
      })}
    </>
  );
};
