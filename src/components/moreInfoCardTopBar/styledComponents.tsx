import {styled} from "../../stitches.config"

export const MoreInfoTopBar = styled("div",{
  height:"90px",
  display:"flex",
  alignItems:"flex-end",
  paddingLeft:"40px",
  fontSize: "40px",
  fontWeight:"bold",
  position:"relative",
  background:"white"
})
export const Xbox = styled("div",{
  width:"43px",
  height:"43px",
  border:"1px solid #C0C0C0",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  cursor:"pointer",
  position:"absolute",
  right:"20px",
  top:"20px",
  background:"white"
})
export const NameTag = styled("p",{
  marginBottom:"20px",
  "@bp2":{
    fontSize:"30px"
  },
  "@bp1":{
    fontSize:"25px"
  }
})