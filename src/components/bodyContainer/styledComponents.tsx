import {styled} from "../../stitches.config"

export const BodyContainerWrap = styled("div",{
  width: "100vw",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  "@bp2":{
    marginTop:"40px"
  }
})
export const ContentContainer = styled("div",{
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column"
})