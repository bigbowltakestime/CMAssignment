import HeaderBar from './headerBar/headerBar'
import BodyContainer from './bodyContainer/bodyContainer'
import { ReactComponent as ChartMetricLogo } from "../img/chartMetricLogo.svg";
import { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { MoreInfoAtom } from "../recoil/MoreInfo"
import MoreInfoCard from './moreInfoCard/moreInfoCard';
import {AppContainer, SearchBarWrap, MobileLogo} from "./styledComponents"
import SearchBarInput from "./searchBarInput/searchBarInput"

function App() {
  const moreInfo= useRecoilValue(MoreInfoAtom)
  const [cardList, setCardList] = useState<any[]>([]);
  const [isMoreinfoClicked, setIsMoreinfoClicked] = useState(false);
  const [page, setPage] = useState(1);
  const scrollRef = useRef(null);
  const [isinitialLoading, setIsinitialLoading] = useState(true);
  const [dbUrl, setDbUrl] = useState<string>("https://api.themoviedb.org/3/person/popular?api_key=472dd62714fd2974e8fae29488a14319&page=")
  // after fetch request, push datas to cardList, and render it to main page
  useEffect(()=>{
    let url = dbUrl + page.toString ()
    fetch(url)
    .then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson)
      setCardList((prev:any) => [...prev,...resJson["results"]])
      setIsinitialLoading(false)
    })
  },[dbUrl,page])
  // infinite scroll. use IntersectionObserver, when the conpoenet is on screen, request more pages
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage((prev:number)=> prev + 1)
      }
    });
    if(!scrollRef.current) return
    observer.observe(scrollRef.current);

    return () => observer.disconnect();
  }, [isinitialLoading,isMoreinfoClicked]);
  return (
    <AppContainer>
      <HeaderBar>
        <a href="/">
          <MobileLogo>
            <ChartMetricLogo/>
          </MobileLogo>
        </a>
        <SearchBarWrap>
          <SearchBarInput setPage={setPage} setDbUrl={setDbUrl} setCardList={setCardList}/>
        </SearchBarWrap>
      </HeaderBar>

      <BodyContainer cardList={cardList} setIsMoreinfoClicked={setIsMoreinfoClicked} ></BodyContainer>
      {isMoreinfoClicked && <MoreInfoCard setIsMoreinfoClicked={setIsMoreinfoClicked} cardList={moreInfo}/>}
      {(cardList.length === 0) && <h1 style={{marginLeft:"100px"}}>no result</h1>}
      {!isinitialLoading && !isMoreinfoClicked && <div ref={scrollRef} style={{width:"100%",position:"absolute",bottom:"550px"}}></div>}
    </AppContainer>
  );
}

export default App;
