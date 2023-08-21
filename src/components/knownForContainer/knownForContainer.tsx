import {KnowForWrap,
  ImageWrap,
  TitleWrap} from "./styledComponents"

interface KnownForContainerProps {
  imageSrc : string,
  title : string
}
function KnownForContainer(props : KnownForContainerProps) {
  let photoSrc
  if(props.imageSrc === undefined || props.imageSrc === null){
    photoSrc = "https://svbc-dwd.s3.us-west-1.amazonaws.com/noResult.png"
  }else{
    photoSrc = "https://image.tmdb.org/t/p/w200" + props.imageSrc
  }
  
  return (
    <KnowForWrap>
      <ImageWrap>
        <img src={photoSrc} height="101%" width="101%" /> 
      </ImageWrap>
      <TitleWrap>{props.title}</TitleWrap>
    </KnowForWrap>
 );
}

export default KnownForContainer;
