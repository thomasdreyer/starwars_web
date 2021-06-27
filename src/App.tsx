import React, { useState } from 'react'
import {RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { setPerson,setPersonDetails} from './personSlice'
import People from './components/People/People';
import Person from './components/Person/Person';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Particle from './components/Particle/Particle';
import './App.css';
import 'animate.css'
import { useQuery } from "react-query";

export default function App() {
  const [search,setSearch] = useState('');
  const { data, isLoading, error } = useQuery("people");
  const person = useSelector((state:RootStateOrAny) => state.person.name);
  const count = useSelector((state:RootStateOrAny) => state.counter.value);

  let carray = [];
if(!isLoading){

  for(let i = 0; i <data.people.results.length; i++){
    const img = 'https://starwars-visualguide.com/assets/img/characters/'+(count > 1 ? ((10*(count-1))+(i+1)):(i+1))+'.jpg';
    carray.push({name:encodeURI(data.people.results[i].name),img:img})
    }

}

  const dispatch = useDispatch()
  const clear = () => {
          dispatch(setPersonDetails(''));
          setSearch('');
        };

  return(
      <div className="App">
        { !isLoading ? <Header/> : null }
        { person === '' && !isLoading ? <Search/> : null }
          <Particle/>
          {
            person === '' ?
            <People/> :
            <Person imageArray={carray}/>
          }
              {
                search !== '' || person !== '' ?
                  <button
                    className="backBtn"
                    onClick={()=>clear()}
                  >
                  Back
                  </button> :
                  null
              }
      </div>
  );
}
