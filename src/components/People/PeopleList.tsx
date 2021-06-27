import React, { useState } from 'react'
import {RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';

import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { decrement, increment ,incrementByValue} from '../../counterSlice'
import { setPerson,setPersonDetails} from '../../personSlice'
import {URL} from '../../Constants';
import Loading from '../Loading/Loading';
import Paging from './Paging';

 export default function PeopleList() {
   const person = useSelector((state:RootStateOrAny) => state.person.name);
   const count = useSelector((state:RootStateOrAny) => state.counter.value);

   const dispatch = useDispatch()
   const PEOPLE_QUERY = gql`{
      people(pageNumber:${count}){
        count
        results{
          name
        }
      }
    }`;
  const { data, isLoading, error } = useQuery("people", () => {
    return request(URL, PEOPLE_QUERY);
  });
let carray = [];
for(let i = 0; i < 82; i++){
const img = 'https://starwars-visualguide.com/assets/img/characters/'+(count > 1 ? ((10*(count-1))+(i+1)):(i+1))+'.jpg';
carray.push(img)

}

  const people = !isLoading ? data.people.results.map((p:any,i:any)=>{
  const img = p.name.includes("Yoda") ? carray[i+1] :carray[i];//'https://starwars-visualguide.com/assets/img/characters/'+(count > 1 ? ((10*(count-1))+(i+1)):(i+1))+'.jpg';
    return(
      <div className="card animate__animated animate__flipInX" onClick={()=>dispatch(setPerson({p:encodeURI(p.name),img:img}))}>
        <img src={img} style={{width:(window.screen.width/10),height:'auto'}}/>
        <span>{p.name}</span>
      </div>
    )
  }):<Loading/>;

  if (isLoading) return <Loading/>
  return(
    <>
      <Paging pageCount={data.people.count}/>
      <div className="containerPeopleList">
      {people}
      </div>
      <Paging pageCount={data.people.count}/>
    </>
  )
}
