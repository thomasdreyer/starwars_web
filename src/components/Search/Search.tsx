import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPersonDetails} from '../../personSlice'
import {FaSearch,FaRegWindowClose}  from 'react-icons/fa';
import './Search.css';


export default function Search(){
  const [search,setSearch] = useState('');
  const dispatch = useDispatch()
  const clear = () => {
          dispatch(setPersonDetails(''));
          setSearch('');
        };
  return(
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <FaSearch
      size={30}
      className="searchBtn"
      color="yellow"
      onClick={()=>dispatch(setPersonDetails(encodeURI(search)))}
      />
      {
        search !== ''
         ? <FaRegWindowClose
             className="searchBtn"
             size={30}
             color="yellow"
             onClick={()=>clear()}
           />
         : null
       }
    </div>
  )
}
