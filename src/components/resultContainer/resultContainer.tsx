import ResultCard from '../resultCard/resultCard';
import { CardInfoInterface } from '../../types/cardInfo';
import {ResultContainerWrap} from "./styledComponents"

interface ResultContainerProps {
  cardList: Array<CardInfoInterface>,
  setIsMoreinfoClicked: React.Dispatch<React.SetStateAction<boolean>>
}

function ResultContainer(props:ResultContainerProps) {
  return (

    <ResultContainerWrap>
      {props.cardList.map((obj :CardInfoInterface , index : number) => (
        <ResultCard cardInfo={obj} key={index} setIsMoreinfoClicked={props.setIsMoreinfoClicked}/>
      ))}
    </ResultContainerWrap>
  );
}

export default ResultContainer;
