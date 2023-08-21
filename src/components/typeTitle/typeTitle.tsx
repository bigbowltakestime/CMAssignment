import {styled} from "../../stitches.config"

const TypeTitle = styled("div",{
  width: "100%",
  height: "70px",
  display: "flex",
  fontSize: "45px",
  fontWeight:"600",
  alignItems:"center",
  paddingLeft:"40px",
  "@bp2":{
    display:"none"
  }
})

export default TypeTitle;
