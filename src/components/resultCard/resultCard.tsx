import { CardInfoInterface } from "../../types/cardInfo"
import { MoreInfoAtom } from "../../recoil/MoreInfo"
import { useSetRecoilState } from "recoil"
import {ResultCardWrap,
  PopNumber,
  PhotoWrap,
  NameWrap} from "./styledComponents"

interface ResultCardProps {
  cardInfo:CardInfoInterface,
  setIsMoreinfoClicked: React.Dispatch<React.SetStateAction<boolean>>
};
function ResultCard(props:ResultCardProps) {
  const setMoreInfo = useSetRecoilState(MoreInfoAtom)
  let photoSrc
  // I found that sometime, from response of the DB API, there is no image link. So I made the exception case.
  if(props.cardInfo.profile_path === undefined || props.cardInfo.profile_path === null){
    photoSrc = "https://svbc-dwd.s3.us-west-1.amazonaws.com/noResult.png"
  }else{
    // decide w300 of imageUrl, not to waste resources 
    photoSrc = "https://image.tmdb.org/t/p/w300" + props.cardInfo.profile_path
  }  
  const onClickPushMoreInfoToAtom = () =>{
    setMoreInfo(props.cardInfo)
    console.log(props.cardInfo)
    props.setIsMoreinfoClicked(true)
  }
  return (
    <ResultCardWrap onClick={onClickPushMoreInfoToAtom}>
      <PopNumber>{Math.round(props.cardInfo.popularity)}</PopNumber>
      <PhotoWrap>
        <img src={photoSrc} height="101%" width="101%" />        
      </PhotoWrap>
      <NameWrap>{props.cardInfo.name}</NameWrap>
    </ResultCardWrap>
  );
}

export default ResultCard;
