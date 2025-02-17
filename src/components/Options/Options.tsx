import { OptionsListStyled, ButtonStyled } from "./styled";

interface IOptions {
  options: Array<"good" | "neutral" | "bad">;
  total: number;
  onLeaveFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onResetFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Options = ({
  options,
  total,
  onLeaveFeedback,
  onResetFeedback,
}: IOptions) => {
  return (
    <OptionsListStyled>
      {options.map((option) => (
        <li key={option}>
          <ButtonStyled data-category={option} onClick={onLeaveFeedback}>
            {option}
          </ButtonStyled>
        </li>
      ))}
      {total > 0 && (
        <ButtonStyled onClick={onResetFeedback}>Reset</ButtonStyled>
      )}
    </OptionsListStyled>
  );
};

export default Options;
