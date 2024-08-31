import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {
    Increment,
    Descrement,
    Refresh
}from './../redux/counter/CounterActions'


function Counter() {
    const count = useSelector(stata => stata.count)
    const dispatch = useDispatch()
  return (
    <div class="container">
      <h1 id="num">{count}</h1>
      <div class="btns">
        <button class="dec" onClick={()=> dispatch(Increment())}>
          <AddOutlinedIcon></AddOutlinedIcon>
        </button>
        <button class="reset" onClick={()=> dispatch(Refresh())}>
          <RefreshOutlinedIcon></RefreshOutlinedIcon>
        </button>
        <button class="inc"  onClick={()=> dispatch(Descrement())}>
          <RemoveOutlinedIcon ></RemoveOutlinedIcon>
        </button>
      </div>
    </div>
  )
}


export default Counter
