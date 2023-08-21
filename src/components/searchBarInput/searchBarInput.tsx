import {useRef, useEffect } from "react";
import {SearchBarInputTag,SearchIconWrap,SearchContainer} from "./styledComponents"
import { ReactComponent as SearchIcon } from "../../img/searchIcon.svg";

interface searchBarInputProps {
  setPage : React.Dispatch<React.SetStateAction<number>>,
  setDbUrl : React.Dispatch<React.SetStateAction<string>>,
  setCardList:React.Dispatch<React.SetStateAction<any[]>>
}
function SearchBarInput(props : searchBarInputProps) {
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  // when search, change fetch url and add keyword query.
  const search = () => {
    if (!searchBarRef.current) return
    if(searchBarRef.current.value==="") return alert("The search input is empty, Please fill it for searching")
    let url = "https://api.themoviedb.org/3/search/person?api_key=7315ec59ea2264da1fa4f4eb8d647853&query="
    let searchQuery = searchBarRef.current.value 
    props.setPage(1)
    props.setDbUrl(url+searchQuery+"&page=")
    searchBarRef.current.value = ""
    props.setCardList([])
  }
  const handleSearch = (e:any) => {
    if (!searchBarRef.current) return   
    if(e.key==="Enter"){
      search()
    }
  }
  useEffect(()=>{
    if (!searchBarRef.current) return      
    searchBarRef.current.addEventListener('keydown', handleSearch);

    return () => {
        if (!searchBarRef.current) return
        searchBarRef.current.removeEventListener('keydown', handleSearch);
    };
  },[searchBarRef.current])
  return(
    <SearchContainer>
      <SearchBarInputTag placeholder="Search for a celebrities" ref={searchBarRef}></SearchBarInputTag>
      <SearchIconWrap onClick={search}>
        <SearchIcon/>
      </SearchIconWrap>
    </SearchContainer>
  )
}

export default SearchBarInput