import React from 'react'
import {RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';


import { decrement, increment ,incrementByValue} from '../../counterSlice'



 export default function Paging({pageCount}) {
   const count = useSelector((state:RootStateOrAny) => state.counter.value);
   const dispatch = useDispatch();
  const pages = Number(pageCount)%10 > 0 ? Math.floor(Number(pageCount)/10)+1 :Math.floor(Number(pageCount)/10);
  console.log(pages)
  let pagin = [];
  for(let i =1 ; i<=pages;i++){
    pagin.push(<button key={i} style={{
      width:30,
      border:'1px solid yellow',
      borderRadius:15,
      color:i !== count ? 'black':'yellow',
      backgroundColor:i !== count ? 'yellow':'transparent',
      marginLeft:5,
      marginRight:5,
      fontSize:12,
      fontWeight:600,
    }} onClick={()=>dispatch(incrementByValue(i))}>{i}</button>)
  }
return(

<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>

<FaArrowAltCircleLeft size={30} color='yellow'onClick={()=>dispatch(decrement())}/>
{
pagin
}
<FaArrowAltCircleRight size={30} color='yellow'onClick={()=>dispatch(increment())}/>

</div>

)

}
