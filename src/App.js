
import { useState, useEffect, } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스"

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  const [code, setCode] = useState([]);
  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    let url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`;
    document.querySelector(".one").style.display = "none"
    document.querySelector(".topd").style.display = "none"
    document.querySelector(".app").style.display = "none"
    document.querySelector(".loader").style.display = "block";
    fetch(url).then(response => response.json())
      .then(json => {
        // console.log(json);
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".topd").style.display = "block"
        document.querySelector(".app").style.display = "flex";
        document.querySelector(".one").style.display = "block";
        setPets(json.response.body.items.item)
      })
      .catch(e => {
        console.log(e)
      })

  }, [])

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    const url2 = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${key}&numOfRows=20&_type=json`
    fetch(url2).then(response => response.json())
      .then(json => {
        setCode(json.response.body.items.item)
      })
  }, [])





  const handleSearch = (bgnde, endde, upr_cd = "6290000", upkind) => {
    const key = process.env.REACT_APP_API_KEY;
    let url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}&upkind=${upkind}`;
    document.querySelector(".app").style.display = "none"
    document.querySelector(".loader").style.display = "block";
    fetch(url).then(response => response.json())
      .then(json => {
        // console.log(json);
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".app").style.display = "flex";
        setPets(json.response.body.items.item)
      })
      .catch(e => {
        console.log(e)
      })
  }




  const handleSelected = (data) => {
    setSelected(data);
    window.scrollTo(0, 0);
  }

  const handleUnSelected = (data) => {
    setSelected(null);
  }


  return (
    <div>
      <div className='topd'>
      🐾
      </div>
      <div className='one'>
      <Search onSearch={handleSearch} onExit={handleUnSelected} data={code}  />
      </div>
      <div class="loader"></div>
      <div className="app">
        {selected ? <Detail target={selected} /> : <></>}
        <List pets={pets} onSelected={handleSelected} />
      </div>
    </div>
  );
}

export default App;
