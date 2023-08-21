import {styled} from "../../stitches.config"

  export const CloseArea =  styled("div",{
    position:"fixed",
    top:"0",
    left:"0",
    width:"100vw",
    height:"100vh",
    cursor:"pointer",
  })
  export const MoreInfoCardWrap = styled("div",{
    zIndex:"3",
    width:"1130px",
    height:"906px",
    "@bp2":{
      height:"max-content",

    }
  })

  export const MoreInfoBody = styled("div",{
    height:"780px",
    display:"flex",
    paddingBottom:"40px",
    background:"white",
    "@bp2":{
      flexDirection:"column",
    }
  })
  export const MoreInfoContentImageContainer = styled("div",{
    marginLeft:"20px",
    flex:"5 1 0",
    display:"flex",
    justifyContent:"center",
    paddingTop:"20px",
    background:"white",
    "@bp2":{
      marginLeft:"0px"
    }
  })


  export const ImageDiv = styled("div",{
    width:"91%",
    height:"91%",
    "@bp3":{
      width:"80%",
      height:"fit-content"
    }
  })

  export const MoreInfoCardContainer = styled("div",{
    zIndex:"2",
    position:"fixed",
    top:"0",
    left:"0",
    width:"100vw",
    height:"100vh",
    background:"#000000B9",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "@bp2":{
      alignItems:"flex-start",
      position:"absolute",
      height:"100%",
      paddingTop:"200px"
    }
  })
