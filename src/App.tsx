import React, { useEffect, useState } from 'react';
import { Input } from './components/input'
import { Button } from './components/button'
import { Product } from './components/product';
import './App.css'
import { Search } from './sections/search';
import { ThemeProvider } from './providers/theme-provider';
import {ThemeButton} from "./components/button-theme"

interface IMeBu {
  onClick: (arg: any)=> void;
}
const MemoButton:React.FC<IMeBu> = ({onClick}) => {
  console.log("Render")
  return (<button onClick={onClick}>Click Me</button>)
};
const ButtonMemo = React.memo(MemoButton)

export const Counter = () => {
  const [count, setCount] = useState(0)
  const onClick = React.useCallback(() => {
    setCount((prevState) => prevState + 1);
  },[])
  return (<>
    <h1>{count}</h1>
    <ButtonMemo onClick={onClick}/>
  </>)
};


function App() {
  const limit:number = 6;
  const startPage = 0;
  const [serverData, setServerData] = useState<any>();
  const [page, setPage] = useState(startPage);
  const [searchState, setSearchState] = useState<string>("");
  const [themeState, setThemeState] = useState<string>("");

  useEffect(()=>{
    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchState}&limit=${limit}&skip=${page}`);
        const data = await response.json();
        setServerData(data.products);
    }
    getData();
  },[page, searchState]);

  return (
    <ThemeProvider>
      <ThemeButton />
      <div className="under_root">
        <Search />
        {/* <Assortment /> */}
        <hr />
        <Input type="text" labelText="Search products" idForLabel="search" onChange={(event)=>{
          setSearchState(event.target.value);
          setPage(0);
        }}/>
        {serverData ? (
            <div className="main_bread_div">
              {serverData.map((item:any)=> {
                return (<Product title={item.title} description={item.description} src={item.images[0]} price={item.price} key={item.id}/>)
              })}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        <div className='bottom_buttons'>
          <Button buttonText='Prev' onClick={() => {setPage(page - limit)}}/>
          <Input type="text" labelText="Select page" idForLabel="page" onChange={(e:any)=>{
            setPage(e.target.value * limit)
          }}/>
          <Button buttonText='Next' onClick={() => {setPage(page + limit)}}/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App