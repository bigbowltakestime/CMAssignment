import {styled} from "../stitches.config"

export const AppContainer = styled('div', {
    display: "flex",
    flexDirection:"column",
    width: "100vw",
    position:"relative"
  });
export const SearchBarWrap = styled("div",{
    position:"absolute",
    right:"60px",
    height:"55px",
    width:"280px",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    "@bp2":{
      top:"130px",
      left: "50%",
      transform: "translate(-46%, 0%)"
    }
  })
export const MobileLogo = styled("div",{
  "@bp1":{
    transform:"scale(0.6)",
    position:"absolute",
    left:"-32px",
    top:"24px"
  }
})