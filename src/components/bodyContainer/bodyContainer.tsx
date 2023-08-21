import TypeTitle from '../typeTitle/typeTitle';
import ResultContainer from '../resultContainer/resultContainer';
import { CardInfoInterface } from "../../types/cardInfo";
import {BodyContainerWrap, ContentContainer} from "./styledComponents"


interface BodyContainerProps {
  cardList: Array<CardInfoInterface>,
  setIsMoreinfoClicked: React.Dispatch<React.SetStateAction<boolean>>
}
function BodyContainer(props: BodyContainerProps) {
  return (
    <BodyContainerWrap>
      <ContentContainer>
        <TypeTitle>
          Celebrities
        </TypeTitle>
        <ResultContainer cardList={props.cardList} setIsMoreinfoClicked={props.setIsMoreinfoClicked}/>
      </ContentContainer>
    </BodyContainerWrap>
  );
}

export default BodyContainer;
