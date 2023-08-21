import {MoreInfoContentInfoContainer,DetailWrap,Category,InfoValue} from "./styledComponents"
import { CardInfoInterface,KnownForItem} from "../../types/cardInfo"
import KnownForContainer from "../knownForContainer/knownForContainer"

interface MoreInfoContentInfoProps {
  cardList:CardInfoInterface
}

function MoreInfoContentInfo(props : MoreInfoContentInfoProps) {
  return (
    <MoreInfoContentInfoContainer>
      <DetailWrap>
        <Category>Gender: </Category>
        <InfoValue>{props.cardList.gender}</InfoValue>
      </DetailWrap>
      <DetailWrap>
        <Category>Popularity: </Category>
        <InfoValue>{props.cardList.popularity}</InfoValue>
      </DetailWrap>
      <DetailWrap style={{height:"590px", flexDirection:"column", alignItems:"flex-start", paddingTop:"20px"}}>
        <Category>Known for: </Category>
        <div style={{width:"100%"}}>
        {
        props.cardList.known_for.map((obj : KnownForItem , index : number) => (
          <KnownForContainer title={obj.title !== undefined ? obj.title : obj.original_name
          } imageSrc={obj.poster_path} key={index}></KnownForContainer>
        ))
        }
        </div>
      </DetailWrap>
      </MoreInfoContentInfoContainer>
 );
}

export default MoreInfoContentInfo;
