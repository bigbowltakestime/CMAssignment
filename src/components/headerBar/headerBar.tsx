import { styled } from '../../stitches.config';

const HeaderBar = styled('div',{
  width: "100vw",
  height: "110px",
  display: "flex",
  background : "#192B39",
  alignItems:"center",
  paddingLeft:"60px",
  "@bp1":{
    justifyContent:"center"
  }
})

export default HeaderBar;
