import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import NumBtn from './component/numBtn';
import { resultCheck,generatenum } from './FnS/functions';
import { uniqnumbers } from './FnS/functions';
import Magicwand from './img/magic-wand.png';
function App() {
  useEffect(() => {
    const arr2:number[] = generatenum(19)
  }, [])
  const [status, setstatus] = useState([false, false])
  const [nums8,] = useState(generatenum(19))
  const [nums2,] = useState(generatenum(3))
  const [selected8, setselected8]: number[] = useState([])
  const [selected2, setselected2]: number[] = useState([])
  const [result,] = useState([uniqnumbers(nums8), Array.from({ length: 1 }, () => nums2[Math.floor(Math.random() * nums2.length)])])
 
  function HandleMAgicWand() {
    if(selected8.length === 0 && selected2.length === 0){
      setselected8(uniqnumbers(nums8))
      setselected2([nums2[Math.floor(Math.random() * nums2.length)]])
    }
  }
  if (!status[0]) {
    return (
      <div className="container">
        <header className="App-header">
          <div className='numsDiv'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <h2 className='bilH2'>Билет 1</h2>
              <button onClick={HandleMAgicWand} style={{ color: 'black', border: 'none', backgroundColor: 'white' }}><img src={Magicwand}></img></button>
            </div>
            <div className='centreDiv8'>
              <p className='descrP1' style={{ color: 'black' }}>Поле 1</p>
              {nums8.map((elem, indx) => {
                return (
                  <NumBtn key={indx} deletenum={() => setselected8((arr: number[]): any => arr.filter((el: number) => el !== elem))} maxnum={8} selected8={selected8} setselected8={() => setselected8((arr: any): any => [...arr, elem])} elem={elem} />
                )
              })}
            </div>
            <div className='centreDiv2'>
              <p className='descrP2' style={{ color: 'black' }}>Поле 2</p>
              {nums2.map((elem, indx) => {
                return (
                  <NumBtn key={indx} deletenum={() => setselected2((arr: number[]): any => arr.filter((el: number) => el !== elem))} maxnum={1} selected8={selected2} setselected8={() => setselected2((arr: any): any => [...arr, elem])} elem={elem} />
                )
              })}
            </div>
            <button onClick={() => resultCheck(result, [selected8, selected2], () => setstatus([true, true]), () => setstatus([true, false]))} className='btnResult'>Показать результат</button>
          </div>



        </header>
      </div>
    );
  }
  return (
    <div className="container">
      <header className="App-header">
        <div className='numsDiv'>
          <h2 className='bilH2'>Билет 1</h2>
          <p className='descrStatus' style={{ color: 'black' }}>{status[1] ? 'Ого, вы выиграли! Поздравляем!' : 'К сожалению, вы проиграли. Попробуйте еще раз'}</p>
        </div>



      </header>
    </div>
  )


}

export default App;
