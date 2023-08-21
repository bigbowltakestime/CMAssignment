import {MoreInfoTopBar, Xbox, NameTag} from "./styledComponents"
import { ReactComponent as Xicon } from "../../img/x-symbol.svg";
import { CardInfoInterface} from "../../types/cardInfo"


interface MoreInfoCardTopBarProps {
  children: never[],
  setIsMoreinfoClicked: React.Dispatch<React.SetStateAction<boolean>>, 
  cardList:CardInfoInterface
}
function MoreInfoCardTopBar(props : MoreInfoCardTopBarProps) {
  const closeOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    props.setIsMoreinfoClicked(false)
  }
  return (
    <MoreInfoTopBar>
      <NameTag>{props.cardList.name}</NameTag>
      <Xbox onClick={closeOnClick}>
        <Xicon></Xicon>
      </Xbox>  
    </MoreInfoTopBar>
 );
}

export default MoreInfoCardTopBar;
