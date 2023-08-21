import {styled} from "../../stitches.config"

export const SearchBarInputTag = styled("input",{
  right:"30px",
  height:"56px",
  width:"280px",
  paddingLeft:"50px",
  fontSize:"17px",
  borderRadius:"5px",
  border:"1px solid gray",
  "@bp2":{
    borderRadius:"28px",
    width:"300px"
  }
})
export const SearchIconWrap = styled("div",{
  position:"relative",
  top:"16px",
  left:"-265px",
  cursor:"pointer",
  "@bp2":{
    top:"16px",
    left:"-280px",
  }
})
export const SearchContainer = styled("div",{
  display:"flex",
  position:"relative",
})
