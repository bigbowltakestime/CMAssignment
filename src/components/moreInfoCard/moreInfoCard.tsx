
import { CardInfoInterface} from "../../types/cardInfo";
import {MoreInfoCardContainer,
  CloseArea,
  MoreInfoCardWrap,
  MoreInfoBody,
  MoreInfoContentImageContainer,
  ImageDiv} from "./styledComponents";
import MoreInfoCardTopBar from "../moreInfoCardTopBar/moreInfoCardTopBar";
import MoreInfoContentInfo from "../moreInfoContentInfo/moreInfoContentInfo";
import { useEffect, useRef } from "react";

interface MoreInfoProps {
  setIsMoreinfoClicked: React.Dispatch<React.SetStateAction<boolean>>, 
  cardList:CardInfoInterface
}
function MoreInfoCard(props:MoreInfoProps) {
  const moreInfoRef = useRef<HTMLDivElement | null>(null);
  let photoSrc
  if(props.cardList.profile_path === undefined || props.cardList.profile_path === null){
    photoSrc = "https://svbc-dwd.s3.us-west-1.amazonaws.com/noResult.png"
  }else{
    photoSrc = "https://image.tmdb.org/t/p/w500" + props.cardList.profile_path
  }  
  const closeOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    props.setIsMoreinfoClicked(false)
  }
  useEffect(()=>{
    if(window.innerWidth>920) return
    moreInfoRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  return (
    <MoreInfoCardContainer>
      <MoreInfoCardWrap ref={moreInfoRef}>
        <MoreInfoCardTopBar setIsMoreinfoClicked={props.setIsMoreinfoClicked} cardList={props.cardList}>
        </MoreInfoCardTopBar>
        <MoreInfoBody>
          <MoreInfoContentImageContainer>
            <ImageDiv>
              <img src={photoSrc} height="101%" width="101%" />  
            </ImageDiv>
          </MoreInfoContentImageContainer>
          <MoreInfoContentInfo cardList={props.cardList}/>
        </MoreInfoBody>
      </MoreInfoCardWrap>
      <CloseArea onClick={closeOnClick}></CloseArea>
    </MoreInfoCardContainer>
  );
}

export default MoreInfoCard;
