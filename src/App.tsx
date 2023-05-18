import { useEffect, useState } from 'react';
import { Input } from './components/input'
import { Button } from './components/button'
import { Product } from './components/product';
import './App.css'

function App() {
  const limit:number = 6;
  const startPage = 0;
  const [serverData, setServerData] = useState<any>()
  const [page, setPage] = useState(startPage)
  const [searchState, setSearchState] = useState<string>("")

  useEffect(()=>{
    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchState}&limit=${limit}&skip=${page}`);
        const data = await response.json();
        console.log(data.products);
        setServerData(data.products);
    }
    getData();
  },[page, searchState]);

  return (
    <div className="under_root">
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
  )
}

export default App