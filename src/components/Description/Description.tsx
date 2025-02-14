import MainHeading from "../MainHeading/MainHeading";
import { DescriptionStyled } from "./styled";

interface IDescription {
  title: string;
  descriptiontext: string;
}

const Description = ({ title, descriptiontext }: IDescription) => {
  return (
    <DescriptionStyled>
      <MainHeading>{title}</MainHeading>
      <p>{descriptiontext}</p>
    </DescriptionStyled>
  );
};

export default Description;
