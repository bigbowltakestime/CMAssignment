import {styled} from "../../stitches.config"

export const ResultCardWrap = styled("div",{
    width: "300px",
    height: "515px",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    marginTop: "25px",
    borderRadius: "10px",
    position: "relative",
    transition: "0.5s",
    cursor: "pointer",
    overflow:"hidden",
    boxShadow:"0.7px 2px 2px 2px #CFCFCF",
    background:"white",
    '&:hover': {
      transform: "scale(1.07)",
      zIndex:1
    },
    "@bp1":{
      width: "240px",
      height: "412px",
    }
  })
  export const PopNumber = styled("div",{
    width: "50px",
    height: "50px",
    borderRadius : "50%",
    position:"absolute",
    left:"15px",
    top:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    background:"white",
    fontSize:"21px"
  })
  export const PhotoWrap = styled("div",{
    flex : "6 1 0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden",

  })
  export const NameWrap = styled("div",{
    flex : "1 1 0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  })